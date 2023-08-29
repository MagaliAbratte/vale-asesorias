import React from 'react'
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';
import gmail from './assets/gmail.png';

export const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='footer-item'>
        <p className='footer-item-texto'>Valentina Aballay</p>
        <p>Diseño de Indumentaria y Textil, Asesoria de Imagen, Produccion de Moda</p>
        <p>Córdoba, Argentina.</p>
      </div>
      <div className='footer-item'>
        <p className='footer-item-texto'>Contactame</p>
        <p>@vale.asesorias</p>
        <p>asesoria.aballay@gmail.com</p>
        <p>349-1506441</p>
      </div>
    </div>
    </>
  )
}
