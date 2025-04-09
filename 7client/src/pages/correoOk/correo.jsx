import React,{useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./correo.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import iniImg from "../../assets/tit3.png"
import botonLog from "../../assets/UpVouch.png"
import productosImg from "../../assets/productos.png";
import Swal from "sweetalert2";



//importamos las imagenes de corazones



const CorreoOk = () => {

    const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "¡Listo!",
      html: "<p style='font-size: 24px;'>¡Gracias, tu registro está culminado!<br />Serás redirigido para iniciar sesión.</p>",
      icon: "success",
      showConfirmButton: false,
      timer: 5000, // 4 segundos
      timerProgressBar: true,
      customClass: {
        popup: 'swal-custom-font'
      },
      didClose: () => {
        navigate("/inicioSesion");
      }
    });
  }, []);

    return( 
        <div className={styles.Fondo}>

         </div>
    )
}


export default CorreoOk