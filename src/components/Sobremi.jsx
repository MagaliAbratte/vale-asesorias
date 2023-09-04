import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portada from './assets/home1.jpg'
import { Link } from 'react-router-dom';

export const Sobremi = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="p-0">
          <div className='div-sobremi'>
            <div className='sobremi-item'>
             <h3>¡Hola Baby!</h3>
             <h4>Soy Valentina Aballay</h4>
             <h5>Diseñadora de Indumentaria y Textil, Asesora de imagen y Productora de moda</h5>
            </div>
            <div className='sobremi-item1'>
             <img src={portada} className='imagen-portada' alt="Img Portada Sobre mi" />
            </div>
          </div>
            
          {/* <img src={portada1} alt="Portada Sobre Mi" className='imagen-portada w-100'/> */}
        </Col>
        <Col xs={12}>
        <div className='texto-sobremi'>
            <h3 className='titulo-sobremi'>Un poco de mi historia...</h3>
            <p>Tengo 29 años y soy oriunda de Arrufó, Santa Fe, Argentina. Desde pequeña, estuve rodeada del mundo de la moda y la belleza. Armaba la vidriera del local de ropa de mi mamá como juego y siempre estaba asesorando a mis amigas en cómo vestirse o maquillarse para salir. Con 16 años, comencé a estudiar modelaje en Mannequins, viajando todos los fines de semana a Córdoba, y descubrí mi pasión por combinar y armar outfits para desfilar.</p>
            <p>Estudié Diseño de Indumentaria y Textil, convirtiéndome en Asesora de Imagen y Productora de Moda. Mi misión es ayudar a las personas a descubrir su imagen personal y potenciar su autoestima para que puedan sentirse cómodos y seguros de sí mismos en todo momento. Me encanta trabajar con mis clientes para que logren sentirse en su máximo esplendor, mostrando su mejor versión y reflejando su verdadero ser.</p>
            <p>Con mi experiencia y formación en el mundo de la moda, estoy comprometida en ayudar a mis clientes a descubrir su estilo personal y a sentirse seguros en su imagen. Espero tener la oportunidad de trabajar contigo y ayudarte a brillar con tu propia luz.</p>
            <p>¡Contáctame y comencemos juntos este emocionante viaje hacia la confianza y la belleza interior!</p>
          </div>

          <div className='div-botones-sobremi'>
            <Link className='boton' to={'/servicios'}>Conocé mis servicios</Link>
            <Link className='boton' to={'/contacto'}>Contactame!</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
