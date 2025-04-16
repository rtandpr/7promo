
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
import PageEntrance from './components/pageEfect/pageEfect';
import Infouser from './pages/Infouser/Infouser';



function App() {


  return (
    <div style={{position:"relative"}}>
     {/* <Navbar></Navbar> */}

     {/* <div style={{height:"160px" , backgroundColor:"#32ab56"}} className='divSpac'></div> */}
     <BrowserRouter>     
        <Routes>
          <Route path="/" element={<PageEntrance><Home/></PageEntrance>} />
          <Route path="/Tyc" element={<PageEntrance><TyC/></PageEntrance> } />
          <Route path="/inicioSesion" element={<PageEntrance><InicioSesion/></PageEntrance>} />
          <Route path="/Registro" element={<PageEntrance><Registro/></PageEntrance>} />
          <Route path="/miPerfil" element={<PageEntrance><MiPerfil/></PageEntrance>} />
          <Route path="/SubirVoucher" element={<PageEntrance><SubirVoucher/></PageEntrance>} /> 
          <Route path="/validate" element={<PageEntrance><CorreoOk/></PageEntrance>} />
          <Route path="/Priv" element={<PageEntrance><Priv/></PageEntrance>} />
          <Route path="/Ganadores" element={<PageEntrance><Ganadores/></PageEntrance>} />
          <Route path="admin/infoUsers/total" element={<Infouser/>} />
          <Route path="/pass/:id" element={<RecuperarPass />} />
         </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App