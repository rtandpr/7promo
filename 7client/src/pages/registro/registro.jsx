import React,{useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./registro.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import iniImg from "../../assets/tit2.png"
import Input from "../../components/inputs/input";
import botonLog from "../../assets/bot_registrame.png"
import productosImg from "../../assets/productos.png";

//importamos iconos
import iconoSes from "../../assets/ico_nombre.png";
import inconoPass from "../../assets/ico_contra.png";
import inconoPassDer from "../../assets/ico_ojo.png";
import iconoCorreo from "../../assets/ico_correo.png";
import iconoTel from  "../../assets/ico_telefono.png";

//importamos las imagenes de corazones
import ballonder2 from "../../assets/balloon_der2.png";
import ballonder from "../../assets/balloon_der.png";
import ballon1zq from "../../assets/balloon_izq.png";
import Swal from "sweetalert2";
import usePageTracking from "../../hooks/useGa";


const Registro = () => {
     usePageTracking()


         useEffect(() => {
             
              document.title = 'Regístrate / 7UP® & SCHWEPPES: ESTA PROMO ESTA DE MADRES';
               
         }, []);

    const [formData, setFormData] = useState({
        Nombres: "",
        Apellidos: "",
        Correo: "",
        Teléfono: "",
        Contraseña: "",
        confirmarContraseña: "",
        aceptaPrivacidad: false,
        aceptaTerminos: false,
        aceptaInfo: false
      });

      const [touchName, setTouchName] = useState(false);
      const [touchApellidos, setTouchApellidos] = useState(false);
      const [touchCorreo, setTouchCorreo] = useState(false);
      const [touchTeléfono, setTouchTeléfono] = useState(false);
      const [touchContraseña, setTouchContraseña] = useState(false);
      const [touchconfirmarContraseña, setTouchconfirmarContraseña] = useState(false);
      const [touchaceptaPrivacidad, setTouchaceptaPrivacidad] = useState(false);
      const [touchaceptaTerminos, setTouchaceptaTerminos] = useState(false);
      const [touchaceptaInfo, setTouchaceptaInfo] = useState(false);

      const [Loading, setLoading] = useState(false);

      const navigate = useNavigate();
      
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
      
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value
        }));

        if(name == "aceptaPrivacidad")setTouchaceptaPrivacidad(true)
        if(name == "aceptaTerminos")setTouchaceptaTerminos(true)
        if(name == "aceptaInfo")setTouchaceptaInfo(true)
      };
    
      ///funciones para recolectar la info
      const handleName = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
          ...prevData,
          "Nombres": value
        }));

        setTouchName(true)

      };

      const handleApellidos = (e) => {
        const { name, value } = e.target;
      
        setFormData((prevData) => ({
          ...prevData,
          "Apellidos": value
        }));

        setTouchApellidos(true)
  
      };

      const handleCorreo = (e) => {
        const { name, value } = e.target;
      
        setFormData((prevData) => ({
          ...prevData,
          "Correo": value
        }));

        setTouchCorreo(true)


      };

      const handleTeléfono = (e) => {
        const { name, value } = e.target;
      
        setFormData((prevData) => ({
          ...prevData,
          "Teléfono": value
        })); 
        
        setTouchTeléfono(true)



      };

      const handleContraseña = (e) => {
        const { name, value } = e.target;
      
        setFormData((prevData) => ({
          ...prevData,
          "Contraseña": value
        }));

        setTouchContraseña(true)


      };

      const handleconfirmarContraseña = (e) => {
        const { name, value } = e.target;
      
        setFormData((prevData) => ({
          ...prevData,
          "confirmarContraseña": value
        }));

        setTouchconfirmarContraseña(true)
     


      };


      ///funcion para enviar la info al servidor
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(Loading)return
        setLoading(true)

        let json = {
            name: formData.Nombres,
            lastName: formData.Apellidos,
            tel: formData.Teléfono,
            pass: formData.Contraseña,
            email: formData.Correo,
            privacidad:formData.aceptaPrivacidad,
            Términosycondiciones:formData.aceptaTerminos,
            recibirinformación:formData.aceptaInfo
          }
      
        try {
          const response = await fetch("https://7up-production.up.railway.app/user/createUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(json),
          });
      
          if (!response.ok) {
            throw new Error("Error al enviar los datos");
          }
      
          const data = await response.json();
      
          setLoading(false)


          Swal.fire({
            title: "¡Listo!",
            text: "Para culminar tu registro, revisa el email que acabamos de enviarte y sigue las instrucciones.",
            icon: "success",
            confirmButtonText: "OK"
          }).then(() => {
            navigate("/inicioSesion");
          });
          
    
      
        } catch (error) {
          console.error("Error en el registro:", error);
          setLoading(false)
          alert("Ocurrió un error al registrar. Intenta nuevamente.");
        }
        
      };



      ///Funcion para obtener indidarle al usuario las cosas que faltan completar en el formulario
      ///Considerar recoletar cada mensaje en su respectivo handle para mostrarlo en cada input
      const validateForm = () => {
        const newErrors = {};
      
        if (!formData.Nombres.trim()) newErrors.Nombres = "El nombre es obligatorio.";
        if (!formData.Apellidos.trim()) newErrors.Apellidos = "El apellido es obligatorio.";
        if (!formData.Correo.trim()) newErrors.Correo = "El correo es obligatorio.";
        else if (!/\S+@\S+\.\S+/.test(formData.Correo)) newErrors.Correo = "El correo no es válido.";
      
        if (!formData.Teléfono.trim()) newErrors.Teléfono = "El teléfono es obligatorio.";
        else if (!/^\d{8,15}$/.test(formData.Teléfono)) newErrors.Teléfono = "Número inválido (8-15 dígitos).";
      
        if (!formData.Contraseña) newErrors.Contraseña = "La contraseña es obligatoria.";
        else if (formData.Contraseña.length < 6) newErrors.Contraseña = "Debe tener al menos 6 caracteres.";
      
        if (formData.confirmarContraseña !== formData.Contraseña) {
          newErrors.confirmarContraseña = "Las contraseñas no coinciden.";
        }
      
        if (!formData.aceptaPrivacidad) newErrors.aceptaPrivacidad = "Debes aceptar el aviso de privacidad.";
        if (!formData.aceptaTerminos) newErrors.aceptaTerminos = "Debes aceptar los términos y condiciones.";
      
        setErrors(newErrors);
      };
      
      
      
      ///Funcion para aplicar las validaciones
      const isFormValid = () => {

    
        
        const {
          Nombres,
          Apellidos,
          Correo,
          Teléfono,
          Contraseña,
          confirmarContraseña,
          aceptaPrivacidad,
          aceptaTerminos,
          aceptaInfo
        } = formData;
      
        // Validar campos obligatorios y checkboxes obligatorios
        const camposCompletos = Nombres && Apellidos && Correo && Teléfono && Contraseña && confirmarContraseña ;
        const checkboxesValidos = aceptaPrivacidad && aceptaTerminos && aceptaInfo;
      
        // Validar correo básico
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo);
      
        // Contraseñas coinciden
        const contrasenasValidas = Contraseña === confirmarContraseña;
      
        return camposCompletos && checkboxesValidos && correoValido && contrasenasValidas;
      };


    return( 
        <div className={styles.Fondo}>
            <Navbar></Navbar>
            <div style={{height:"160px" , backgroundColor:"#32ab56"}} className='divSpac'></div>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    <img src={iniImg} alt="iniImg" className={styles.titleImg} />
                </h1>

                <form className={styles.loginForm} >
                    <div className={styles.formGroup}>
                        <Input
                          placeholder="Nombres"
                          type="text"
                          iconoIzq={iconoSes}
                          handleChange={handleName}
                          borderErr={touchName && formData.Nombres == ""}
                          msjErr={"El nombre es obligatorio."}
                        />

                        <div style={{width:"100px"}}/>

                        <Input
                          placeholder="Apellidos"
                          type="text"
                          iconoIzq={iconoSes}
                          handleChange={handleApellidos}
                          borderErr={touchApellidos && formData.Apellidos == ""}
                          msjErr={"El apellido es obligatorio."}
                        />


                                          
                    </div>

                    <div className={styles.formGroup}>
                        <Input
                          placeholder="Correo"
                          type="email"
                          iconoIzq={iconoCorreo}
                          handleChange={handleCorreo}
                          borderErr={touchCorreo && formData.Correo == ""}
                          msjErr={"El correo es obligatorio."}
                        />

                        <div style={{width:"100px"}}/>

                        <Input
                          placeholder="Teléfono"
                          type="number"
                          iconoIzq={iconoTel}
                          handleChange={handleTeléfono}
                          borderErr={touchTeléfono && formData.Teléfono == ""}
                          msjErr={"El teléfono es obligatorio."}
                        />
                    </div>


                    <div className={styles.formGroup}>

                      <Input
                          placeholder="Contraseña"
                          type="password"
                          iconoIzq={inconoPass}
                          iconoDer={inconoPassDer}
                          handleChange={handleContraseña}
                          borderErr={touchContraseña && formData.Contraseña == ""}
                          msjErr={"La contraseña es obligatoria."}
                        />
                        
                        <div style={{width:"100px"}}/>


                        <Input
                          placeholder= "Confirmar contraseña"
                          type="password"
                          iconoIzq={inconoPass}
                          iconoDer={inconoPassDer}
                          handleChange={handleconfirmarContraseña}
                          borderErr={touchconfirmarContraseña && formData.confirmarContraseña !== formData.Contraseña}
                          msjErr={ "Las contraseñas no coinciden."}
                        />
                    </div>
                     

                     <div className={styles.contentInputsCheck}>
                        <div className={styles.divChek}>
                        <input 
                            type="checkbox"  
                            name="aceptaPrivacidad" 
                            checked={formData.aceptaPrivacidad}
                            onChange={handleChange}
                            style={{backgroundColor:"red"}}
                            />                        
                        <label for="AceptoAvisodeprivacidad">Acepto Aviso de Privacidad</label>
                        </div>
                    
                        <div className={styles.divChek}>
                        <input 
                            type="checkbox"  
                            name="aceptaTerminos" 
                            checked={formData.aceptaTerminos}
                            onChange={handleChange}
                            />
                            <label for="AceptoTérminosycondiciones">Acepto Términos y Condiciones</label>
                        </div>


                        <div className={styles.divChek}>
                        <input 
                            type="checkbox"  
                            name="aceptaInfo" 
                            checked={formData.aceptaInfo}
                            onChange={handleChange}
                            />
                            <label for="AceptorecibirinformaciónporWhatsappye-mail"> Acepto recibir información 
                              <br className={styles.brResp} />
                              por Whatsapp y/o E-mail</label>
                        </div>
                    </div>
                    <h1 className={styles.title} style={{marginTop:"40px"}}>
                        <img 
                          src={botonLog} 
                          alt="iniImg" 
                          className={styles.titleImg2}
                          onClick={isFormValid() ? handleSubmit : null}
                          style={{
                            filter: isFormValid() ? "none" : "grayscale(100%)",
                            opacity: isFormValid() ? 1 : 0.5,
                            pointerEvents: isFormValid() ? "auto" : "none",
                            cursor: isFormValid() ? "pointer" : "not-allowed",
                          }}
                          />

                    </h1>

                    <p 
                      className={styles.p}> 
                       Si ya tienes una cuenta,
                        <Link
                            to="/inicioSesion"
                            className={styles.a}
                            > ingresa aquí</Link>
                   </p>
                </form>


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


export default Registro