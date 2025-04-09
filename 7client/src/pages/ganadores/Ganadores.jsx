import React,{useEffect} from 'react';
import styles from './Ganadores.module.css';
import Navbar from '../../components/navbar/navbar';
import title from "../../assets/titulo_ganadores.png";
import ProductosImg from "../../assets/productos.png";
import Footer from '../../components/footer/footer';
import ballonder2 from "../../assets/balloon_der2.png";
import ballonder from "../../assets/balloon_der.png";
import ballon1zq from "../../assets/balloon_izq.png";
import usePageTracking from "../../hooks/useGa";
import { Link } from 'react-router-dom';

const Ganadores = () => {
  usePageTracking();


    useEffect(() => {

      document.title = 'Ganadores / 7UP® & SCHWEPPES: ESTA PROMO ESTA DE MADRES';
  
    }, []);


  return (
    <div className={styles.tycBackground}>
    <div className={styles.container}>
        <div className={styles.navbarStyles}>
              <Navbar></Navbar>
              <div style={{height:"160px" , backgroundColor:"#32ab56"}} className='divSpac'></div>

        </div> 

        <div className={styles.container2}>
            <h1 className={styles.title}>
                <img src={title} alt="title" className={styles.titleImg} />
            </h1>
                <p className={styles.text}>
                    Muy pronto tendremos aquí a los ganadores de nuestra promoción. 
                    <br />
                    Mientras tanto <a href="inicioSesion">sigue participando</a> 
                </p>
        </div>

      <h1 className={styles.containImg}>
        <img src={ProductosImg} alt="ProductosImg" className={styles.porductosImg} />
     </h1>
    </div>



     <h1 className={styles.containImg2}>
        <img src={ballonder2} alt="ballonder2" className={styles.ballonder2} />
     </h1>

     <h1 className={styles.containImg3}>
        <img src={ballonder} alt="ballonder3" className={styles.ballonder} />
     </h1>


     <h1 className={styles.containImg4}>
        <img src={ballon1zq} alt="ballon1zq" className={styles.ballon1zq} />
     </h1>

     <div className={styles.containerFooter} style={{marginTop:"-150px", backgroundColor:"white"}} >
      <div style={{height:"100px"}}></div>
      <Footer></Footer>     
    </div> 


    </div>

  );
};

export default Ganadores;