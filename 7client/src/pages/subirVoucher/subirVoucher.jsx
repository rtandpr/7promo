import React, { useState,useRef,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./subirVoucher.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import iniImg from "../../assets/tit5.png";
import botonLog from "../../assets/boton_cargar.png";
import productosImg from "../../assets/productos.png";
import espacio_stv from "../../assets/espacio_stv.png";
import ballonder2 from "../../assets/balloon_der2.png";
import ballonder from "../../assets/balloon_der.png";
import ballon1zq from "../../assets/balloon_izq.png";
import Swal from "sweetalert2";
import usePageTracking from "../../hooks/useGa";

const SubirVoucher = () => {
  const [imagenBase64, setImagenBase64] = useState(null);
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  usePageTracking()

  const inputRef = useRef(null);

  
 useEffect(() => {
          try {
              const storedData = localStorage.getItem("userData");
              const dateUser = storedData ? JSON.parse(storedData) : null;
              setData(dateUser);            
          } catch (error) {
              navigate("/Registro")
          }
    }, []);
  

  const handleImagenChange = (e) => {
    
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagenBase64(reader.result); // esto es la imagen en base64
    };
    reader.readAsDataURL(file);

  };

  const handleClickImagen = () => {
    inputRef.current.click(); // activa el input escondido
  };

  ///funcion para enviar la info al servidor
  const enviarImagen = async (e) => {     
        
            if (!imagenBase64) {
                alert("Por favor selecciona una imagen antes de enviar.");
                return;
            }
           
            let json = {
                userId: data.id,
                img: imagenBase64
              }
          
            setLoading(true)
            try {
              const response = await fetch("https://7promo-production.up.railway.app/img/createImg", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(json),
              });
          
              const data = await response.json();

              if(data.success){
                setLoading(false)
                navigate("/miPerfil")
              }

              if(data.message == 'El usuario ya cargó esta imagen previamente.'){
                Swal.fire(
                    "¡UPPPSS!",
                    "ya cargó esta imagen previamente.",
                    "error"
                );
              }

              console.log("data",data);
              
            } catch (error) {
              console.error("Error en el registro:", error);
              Swal.fire(
                "¡UPPPSS!",
                "Algo salió mal",
                "error"
            );
              setLoading(false)
            }
            
 };
    

  return (
    <div className={styles.Fondo}>
      <Navbar />

      <div style={{height:"160px" , backgroundColor:"#32ab56"}} className='divSpac'></div>

      <div className={styles.container}>
        <h1 className={styles.title}>
          <img src={iniImg} alt="iniImg" className={styles.titleImg} />
        </h1>

        <form className={styles.loginForm}>
          <p className={styles.p}>
          ¡Entre más vouchers registres, más oportunidades tienes de ganar!
          </p>

          <div className={styles.divUp}>
          <img
                src={espacio_stv}
                alt="espacio_stv"
                className={styles.espacio_stv}
                onClick={handleClickImagen}
                style={{ cursor: "pointer" }} // buena UX
            />
         </div>

          {/* Input para subir imagen */}
          <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImagenChange}
                style={{ display: "none" }}
            />

          <h1 className={styles.title} style={{ marginTop: "40px", cursor: "pointer",}}>
            {
              !loading ? <img 
              src={botonLog}
              alt="boton cargar"
              className={styles.titleImg2} 
              onClick={enviarImagen}
              /> : <h2 style={{fontSize:"60px",color:"white", position:"relative", top:"-60px"}}>Cargando...</h2>
            }

          </h1>

          
          {/* Mostrar imagen previa */}
          {imagenBase64 && (
            <div style={{ marginTop: "20px", maxWidth:"90%" }}>
              {/* <p style={{ color: "" }}>Previsualización:</p> */}
              <img src={imagenBase64} alt="preview" style={{ maxWidth: "100%", maxHeight: "300px", border:"2px solid white"  }} />
            </div>
          )}
        </form>

        <div>
          <h1 className={styles.title} style={{ marginTop: "40px" }}>
            <img src={productosImg} className={styles.productosImg} />
          </h1>
        </div>
      </div>

      <div className={styles.containerFooter}>
        <Footer />
      </div>

      <img src={ballonder2} alt="ballonder2" className={styles.ballonder2} />
      <img src={ballonder} alt="ballonder3" className={styles.ballonder} />
      <img src={ballon1zq} alt="ballon1zq" className={styles.ballon1zq} />
    </div>
  );
};

export default SubirVoucher;
