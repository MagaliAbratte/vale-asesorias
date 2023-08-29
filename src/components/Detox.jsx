import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import detox from './assets/detox.jpg'
import Accordion from 'react-bootstrap/Accordion';
import whatsapp from './assets/whatsapp.png'

export const Detox = () => {
  return (
    <>
    <Container className='info-container'>
      <Row>
        <Col md={6}>
        <h2 className='info-titulo'>DETOX</h2>
        <h3 className='info-titulo2'>Organizacion de Guardarropas</h3>
        <p className='info-texto'>¿Alguna vez te has sentido abrumado por la cantidad de ropa en tu armario? ¿Te sientes frustrado al no encontrar lo que buscas cuando te vistes por la mañana?</p>
        <p className='info-texto'>Mi enfoque es mucho más que simplemente ordenar tu armario, se trata de liberarte de todo lo que ya no te sirve y dejarte solo con lo que te hace sentir increíble. Trabajaremos juntas para crear un espacio armonioso y funcional que refleje tu estilo personal.</p>
        <p className='info-texto'>Durante el proceso, te guiaré para que tomes decisiones informadas y valientes sobre qué mantener, qué donar y qué vender. Te ayudaré a descubrir nuevos conjuntos y a sacar el máximo provecho de las prendas que ya tienes.</p>
        <p className='info-texto'>El resultado final es un armario organizado, eficiente y lleno de prendas que te hacen sentir increíble. Te sentirás libre de la carga de la ropa que ya no te sirve y te sentirás más segura y empoderada al vestirte cada día.</p>
        <p className='info-texto'>Así que si estás lista para deshacerte del desorden y el caos en tu armario y darle la bienvenida a una nueva era de armado de looks, contáctame hoy mismo para reservar tu asesoría.</p>
        </Col>
        <Col md={6}>
        <div>
        <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={detox}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
        </Col>
      </Row>
    </Container>

    <Container>
     <Row>
      <Col> 
      <Accordion className='acordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='desplegable-titulo'><strong>VALOR Y FORMA DE PAGO</strong></Accordion.Header>
        <Accordion.Body className='desplegable-texto'>
        Presencial hasta 3 hs $30.000 efectivo o transferencia.
        Online $20.000 para residentes Argentinos.
        <br />
        $35.000 tarjeta de crédito por mercado pago para residentes Argentinos
        <br />
        US$50 por Western Union o PayPal para extranjeros.
        <br />
        Cada hs que se sume serán $10.000 más. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Col>
     </Row>
    </Container>

    <Container>
      <Row>
        <Col>
        <div className='div-mensaje'>
          <h4>¡Quiero agendar!</h4>
          <a href="https://api.whatsapp.com/send?phone=3491506441" target='_blank'><img src={whatsapp} alt="Icono Whatsapp" className='icono-mensaje'/></a>
        </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}
