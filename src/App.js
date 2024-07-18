import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/layout/Navbar';
import { Sobremi } from './components/general/Sobremi';
import { Contacto } from './components/general/Contacto';
import { Colorimetria } from './components/pages/Colorimetria';
import { Visagismo } from './components/pages/Visagismo';
import { Silueta } from './components/pages/Silueta';
import { Estilo } from './components/pages/Estilo';
import { Compras } from './components/pages/Compras';
import { Inicio } from './components/general/Inicio';
import { Servicios } from './components/general/Servicios';
import { Footer } from './components/layout/Footer';
import { Exito } from './components/pages/Exito';
import { Detox } from './components/pages/Detox';
import { Eventos } from './components/pages/Eventos';
import { Charlas } from './components/pages/Charlas';
import { ScrollToTop } from './components/layout/ScrollToTop';


function App() {
  return (
    <div>
      <BrowserRouter>
       <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element= {<Inicio />}/>
          <Route path='/sobremi' element= {<Sobremi />}/>
          <Route path='/contacto' element= {<Contacto />}/>
          <Route path='/servicios' element ={<Servicios />}/>
          <Route path='/colorimetria' element= {<Colorimetria />}/>
          <Route path='/visagismo' element= {<Visagismo />}/>
          <Route path='/silueta' element= {<Silueta />}/>
          <Route path='/estilopersonal' element= {<Estilo />}/>
          <Route path='/compras' element= {<Compras />}/>
          <Route path='/exito' element= {<Exito />}/>
          <Route path='/detox' element= {<Detox />}/>
          <Route path='/eventos' element= {<Eventos />}/>
          <Route path='/charlas' element= {<Charlas />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
