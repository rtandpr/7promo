
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import TyC from './pages/tyc/tyc';
import InicioSesion from './pages/inicioSesion/inicioSesion';
import Registro from './pages/registro/registro';
import MiPerfil from './pages/miPerfil/miperfil';
import SubirVoucher from './pages/subirVoucher/subirVoucher';
import CorreoOk from './pages/correoOk/correo';
import Priv from './pages/privacidad/Priv';
import Ganadores from './pages/ganadores/Ganadores';
import RecuperarPass from './pages/recuperarPass/recuperar';


import usePageTracking from './hooks/useGa';



function App() {


  return (
    <div style={{position:"relative"}}>
     {/* <Navbar></Navbar> */}

     {/* <div style={{height:"160px" , backgroundColor:"#32ab56"}} className='divSpac'></div> */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/Tyc" element={<TyC/>} />
          <Route path="/inicioSesion" element={<InicioSesion/>} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/miPerfil" element={<MiPerfil/>} />
          <Route path="/SubirVoucher" element={<SubirVoucher/>} /> 
          <Route path="/validate" element={<CorreoOk/>} />
          <Route path="/Priv" element={<Priv/>} />
          <Route path="/Ganadores" element={<Ganadores/>} />
          <Route path="/pass/:id" element={<RecuperarPass />} />
         </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
