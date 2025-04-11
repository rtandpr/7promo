import React, { useEffect } from "react";
import styles from "./home.module.css";
import titularImg from "../../assets/titular.png";
import paricipaImg from "../../assets/participa.png"; 
import baloonImg from "../../assets/balloons_izquierda.png";
import premiosImg from "../../assets/premios.png";
import premios_m from "../../assets/premios_m.png";
import porductosImg from "../../assets/productos.png";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import usePageTracking from "../../hooks/useGa";
import { useInView } from "react-intersection-observer";

///importamos las animaciones 
import { Zoom } from "react-awesome-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  usePageTracking()
  const { ref, inView } = useInView({
    triggerOnce: false, // queremos que se repita
    threshold: 0.7,    // porcentaje visible para activar (20%)
  });


  ///animaciones con AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  useEffect(() => {
    const sectionId = localStorage.getItem('scrollTo');
    if (sectionId) {
      const scrollTo = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        localStorage.removeItem('scrollTo'); // Limpiamos después de hacer scroll
      };

      // Esperamos un poco para asegurar que el DOM ya está montado
      setTimeout(scrollTo, 300);
    }

    document.title = '7UP® & SCHWEPPES: ESTA PROMO ESTA DE MADRES';

  }, []);

  return (
    <div className={styles.homeFondo}>
      <Navbar></Navbar>
      <div className={styles.homeBackground}>
        <img
          src={titularImg}
          className={styles.titularImg}
          data-aos="fade-right"
        />
      </div>


      <div id="mec" style={{ position: "relative", top: "-330px" }}></div>


      <div className={styles.secondSection} id="mec">


        <img
          data-aos="zoom-in"
          src={paricipaImg}
          className={styles.participaImg}
        />




        <img
          src={baloonImg}
          className={styles.baloonImg}
          data-aos="zoom-in"
        />

        <div id="premios" style={{ position: "relative", top: "-100px" }}></div>


        <img
          src={premiosImg}
          className={styles.premiosImg}
          data-aos="zoom-in"

        />



        <img
          src={premios_m}
          className={styles.premiosImg2}
          data-aos="zoom-in"
        />


        <img
          ref={ref}
          src={porductosImg}
          className={`${styles.porductosImg} ${inView ? styles.fadeDownRight : ''}`}
        />

      </div>



      <div className={styles.containerFooter}>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;