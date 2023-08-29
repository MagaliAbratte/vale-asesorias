import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import estilo2 from './assets/estilo2.jpg'
import estilo3 from './assets/estilo3.jpg'
import Accordion from 'react-bootstrap/Accordion';
import whatsapp from './assets/whatsapp.png'


export const Estilo = () => {
  return (
    <>
    <Container className='info-container'>
      <Row>
        <Col md={6}>
        <h2 className='info-titulo'>Estilo Personal</h2>
        <p className='info-texto'>Es un servicio en el cual buscamos potenciar la imagen en cada aspecto de tu vida, se trata de descubrir con qué te identificas y qué buscas proyectar para encontrar el hilo conductor del estilismo a trabajar.</p>
        <p className='info-texto'>El beneficio de está asesoría es claro: saber cómo vestir y qué comprar, resolver el vestir diario según las actividades programadas. Es ver el guardarropa alineado a tus necesidades y te resuelva sin dar dolor de cabeza y que en cada look puedas ser vos misma, que tu esencia pueda hablar sin mediar palabra.</p>
        <p className='info-texto'>Mi enfoque es inspirarte a explorar tu propia imagen y a descubrir el potencial que tienes para lucir genial en cualquier situación. No se trata solo de comprar ropa nueva, se trata de descubrir quién eres y cómo queres presentarte al mundo.</p>
        </Col>
        <Col md={6}>
        <div>
        <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={estilo2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={estilo3}
          alt="Second slide"
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
        <Accordion.Header className='desplegable-titulo'><strong>INFO</strong></Accordion.Header>
        <Accordion.Body className='desplegable-texto'>
        Son 3 encuentros que se pueden realizar de forma presencial u online. En el primer encuentro se realizan preguntas  y se da una conversación para empezar a trabajar el estilo. En el segundo encuentro vemos todos los pilares de dónde nos encontramos paradas, vemos el punto de partida y conversamos el objetivo propuesto en base a la primera conversación. En el tercer encuentro vemos el objetivo propuesto en imágenes y referencias de prendas, accesorios, zapatos, make up, peinados y looks para lograr la imagen deseada.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='desplegable-titulo'><strong>FORMA DE TRABAJO</strong></Accordion.Header>
        <Accordion.Body className='desplegable-texto'>
        Al terminar la asesoría se entrega en formato PDF una guía personal con toda la explicación brindada y referencias con ejemplos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='desplegable-titulo'><strong>VALOR Y FORMA DE PAGO</strong></Accordion.Header>
        <Accordion.Body className='desplegable-texto'>
         $27.000 efectivo o transferencia.
         <br />
         $30.000 con tarjeta de crédito por mercado pago para residentes Argentinos.
         <br />
         US$ 70 por Western Union o PayPal para extranjeros.
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
