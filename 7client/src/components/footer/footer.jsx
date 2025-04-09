import React from 'react';
import styles from './footer.module.css';
import logoFb from '../../assets/facebook.png';
import logoRalph from '../../assets/Ralphs.png';
import { Link } from 'react-router-dom';
import productosImg from "../../assets/productos.png";

const Footer = () => {
  return (
    <>

    <footer className={styles.footer}>

                {/* <div >
                    <h1 className={styles.title} style={{marginTop:"40px"}}>
                        <img
                            src={productosImg}
                            className={styles.productosImg}
                            />                 
                    </h1>
                </div> */}


      <div className={styles.links}>
         <Link to="/tyc">TÉRMINOS Y CONDICIONES</Link>
         <br className={styles.brResp}/>
         <Link to="/Priv">AVISO DE PRIVACIDAD</Link>
      </div>
      <p className={styles.promotion}>
      *Promoción válida del 7 de abril al 19 de mayo de 2025.
      <br />
       Nada que comprar para participar.
      <br />
       Válida para residentes de Puerto Rico. Consulta las reglas en 7uppr.com
      </p>
      <div className={styles.social}>
        <div className={styles.socialIcons}>
            <span>Síguenos</span>
            <a href="https://www.facebook.com/7UPPR" target="_blank" rel="noopener noreferrer">
            <img src={logoFb} alt="Facebook" />
            </a>
        </div>

        <img  className={styles.logoIMG} src={logoRalph} alt="Ralph's Logo" />

      </div>

    </footer>
    </>
  );
};

export default Footer;