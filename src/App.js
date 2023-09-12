import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/Navbar';
import { Sobremi } from './components/Sobremi';
import { Contacto } from './components/Contacto';
import { Colorimetria } from './components/Colorimetria';
import { Visagismo } from './components/Visagismo';
import { Silueta } from './components/Silueta';
import { Estilo } from './components/Estilo';
import { Compras } from './components/Compras';
import { Inicio } from './components/Inicio';
import { Servicios } from './components/Servicios';
import { Footer } from './components/Footer';
import { Exito } from './components/Exito';
import { Detox } from './components/Detox';
import { Eventos } from './components/Eventos';
import { Charlas } from './components/Charlas';
import { ScrollToTop } from './components/ScrollToTop';


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
