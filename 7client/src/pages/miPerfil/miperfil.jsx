import React,{useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./miperfil.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import iniImg from "../../assets/tit3.png"
import botonLog from "../../assets/UpVouch.png"
import productosImg from "../../assets/productos.png";
import Swal from "sweetalert2";

import usePageTracking from "../../hooks/useGa";

//importamos las imagenes de corazones
import ballonder2 from "../../assets/balloon_der2.png";
import ballonder from "../../assets/balloon_der.png";
import ballon1zq from "../../assets/balloon_izq.png";



const MiPerfil = () => {
    const [data, setData] = useState(false);
    const [imgUser, setImgUser] = useState([]);
    const navigate = useNavigate();
    const [Loading, setLoading] = useState(false);
    usePageTracking()

    useEffect(() => {
        try {
            const storedData = localStorage.getItem("userData");
            const dateUser = storedData ? JSON.parse(storedData) : null;
            setData(dateUser);            
        } catch (error) {
            navigate("/Registro")
        }

    }, []);

        
    useEffect(() => {
        
         document.title = 'Mi Perfil / 7UP® & SCHWEPPES: ESTA PROMO ESTA DE MADRES';
          
    }, []);
    


    useEffect(() => {

      const fetchImage = async () => {
        if (data.id) {
          const json = {
            userId: data.id,
          };

          setLoading(true)
    
          try {
            const response = await fetch("https://7promo-production.up.railway.app/img/getImgByidUser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(json),
            });
    
            const result = await response.json();
            console.log("imagenes del usuario", result);
            setImgUser(result.data)
          } catch (error) {
            console.error("Error en el registro:", error);
          } finally{
            setLoading(false)
          }
        }
      };
    
      fetchImage();

  }, [data.id]);


      const redirect = (param) => {
        navigate(param)
      };


      const deleteUser = async() => {

        // let json = {
        //     id: data.id,
        //   }
      
        // try {
        //   const response =  await fetch("https://7promo-production.up.railway.app/user/deleteUser", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(json),
        //   });
      
      
        //   const data = await response.json();

        //   console.log("data GET INFO USER",data);
        //   localStorage.setItem("userData", JSON.stringify(data.data));



        //   if(data?.message == "User deleted" ){
        //     localStorage.setItem("userData", JSON.stringify(false));
        //     navigate("/Registro")
        //   } 
      
        // } catch (error) {
        //   console.error("Error en el registro:", error);
        //   Swal.fire(
        //     "¡UPPPSS!",
        //     "Error al eliminar el usuario",
        //     "error"
        //   );
        // }

        localStorage.setItem("userData", JSON.stringify(false));
        navigate("/inicioSesion")
      };





    return( 
        <div className={styles.Fondo}>
            <Navbar></Navbar>
            <div style={{height:"160px" , backgroundColor:"#32ab56"}} className='divSpac'></div>
            <div className={styles.container}>
                
       
                    <h1 className={styles.title}>
                        <img src={iniImg} alt="iniImg" className={styles.titleImg} />
                    </h1>
                
                
                 {/* <p className={styles.p}> 
                    ¡Máximo 5 participaciones al día!                   
                 </p> */}

                <div className={styles.contentUserData}>
                    <div className={styles.datosUserDiv}>
                        <div className={styles.datosUser}>
                            <h1>{data?.name?.split(" ")[0]}</h1>
                            <p className={styles.p1}>{data?.lastName}</p>

                            <p className={styles.p2} onClick={deleteUser}>Cerrar sesión</p>
                        </div>

                        <h1 className={styles.title2} style={{cursor:"pointer"}}>
                            <img src={botonLog } alt="iniImg" className={styles.titleImg2} onClick={() => redirect("/SubirVoucher")} />
                        </h1>
                    </div>

                    <div className={styles.datosVucherDiv}>
                      <div className={styles.datosImg}>
                      
                      {
                         !Loading ?  <>
                              <h1>Llevas {imgUser?.length  >  0 ? imgUser?.length   : 0 } voucher(s) subido(s)</h1>
                              <p className={styles.p1}>¡Entre más vouchers registres, más oportunidades tienes de ganar!</p>
                              <div
                                  // style={{
                                  //   width: '300px',
                                  //   overflowX: 'auto',
                                  //   display: 'flex',
                                  //   flexDirection: 'row-reverse', // derecha a izquierda
                                  //   gap: '10px',
                                  //   padding: '10px',
                                  //   border: '1px solid #ccc',
                                  //   borderRadius: '8px',
                                  // }}
                                  className={styles.containImgs}
                                >
                                  {imgUser.map((el, index) => (
                                    <img
                                      key={index}
                                      src={el.img} // o solo el.img si es una URL
                                      alt={`Imagen ${index + 1}`}
                                      style={{
                                        width: '200px',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        flexShrink: 0, // evita que se redimensionen
                                      }}
                                    />
                                  ))}
                              </div>
                         </> : <h2 style={{fontSize:"60px",color:"black", position:"relative", top:"-60px"}}>Cargando...</h2>
                      }

                      </div>
                    </div>

                </div>


                <div >
                    <h1 className={styles.title} style={{marginTop:"40px"}}>
                        <img
                            src={productosImg}
                            className={styles.productosImg}
                            />                 
                    </h1>
                </div>
            </div>
            <div className={styles.containerFooter}>
                <Footer></Footer>     
            </div>  

                        
             
             <img src={ballonder2} alt="ballonder2" className={styles.ballonder2} />
             <img src={ballonder} alt="ballonder3" className={styles.ballonder} />
             <img src={ballon1zq} alt="ballon1zq" className={styles.ballon1zq} />
      </div>
    )
}


export default MiPerfil