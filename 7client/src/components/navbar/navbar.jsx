import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css"; // Importar estilos como módulo
import Logo from "../../assets/logo.png";

import menu1 from "../../assets/menu_1.png";
import menu2 from "../../assets/menu_2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState(false);
  
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const redirect = (param) => {
 
    if(param == "/inicioSesion"){
      if(userData?.id){
        navigate("/miPerfil")
      }else{
        navigate("/inicioSesion")
      }

      return
    }
    navigate(param)
  };


  useEffect(() => {

       try {
          const storedData = localStorage.getItem("userData");
          const dateUser = storedData ? JSON.parse(storedData) : null;
          setUserData(dateUser);            
        } catch (error) {
          console.log("ERROR",error); 
      }
  
  }, []);


  
  const goToSection = (id) => {
    localStorage.setItem('scrollTo', id); // Guardamos la sección
    navigate('/'); // Navegamos al home
  };


  const scrollToSection = (id) => {

    setIsMenuOpen(false)
    if (window.location.pathname !== '/') {
      localStorage.setItem('scrollTo', id); // Guardamos la sección
      navigate('/'); // Navegamos al home
    } else {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  
  }, []);



  
  return (
    <div className={!isScrolled ? styles.navbar : styles.navbartransparent }>
      <div className={styles["navbar-logo"]}>
      <Link to="/">
      <div className={styles.containImg}>
        <img
          src={Logo}
          alt="7UP Logo"
          className={!isScrolled ? styles.imgresp : styles.imgrespScroll}
        />
      </div>
        </Link>
      </div>
      <div
        className={`${styles["navbar-links"]} ${
          isMenuOpen ? styles["menu-open"] : ""
        }`}
      >
      <a onClick={() => scrollToSection('mec')} style={{ cursor: 'pointer' }}>Mecánica</a>
      <a onClick={() => scrollToSection('premios')} style={{ cursor: 'pointer' }}>Premios</a>

        <Link to="/ganadores">Ganadores</Link>

        <button className={`${styles.btn} ${styles["btn-login"]}`} onClick={() => redirect("/inicioSesion")}>
           {userData?.id ? "Mi perfil" : "Iniciar Sesión"} 
        </button>

        <button className={`${styles.btn} ${styles["btn-register"]}`} onClick={() => redirect("/Registro")}>
          Regístrate
        </button>
      </div>
      <div className={styles["menu-toggle"]} onClick={toggleMenu}>
        {isMenuOpen ? <img src={menu2} alt="" /> :<img src={menu1} alt="" />}
        <i>
          
        </i>
      </div>
    </div>
  );
};

export default Navbar;