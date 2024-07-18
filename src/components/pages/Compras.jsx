import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import estilo2 from '../assets/estilo/estilo2.jpg'
import estilo3 from '../assets/estilo/estilo3.jpg'
import whatsapp from '../assets/contacto/whatsapp.png'

export const Compras = () => {
  return (
    <>
       <Container className='info-container'>
      <Row>
        <Col md={6}>
        <h2 className='info-titulo'>Compras Inteligentes</h2>
        <p className='info-texto'>Es un servicio pensado directamente para saber cómo, cuándo y qué comprar de una manera eficiente e inteligente.</p>
        <p className='info-texto'>Veremos tips generales sobre las compras, cómo armar un presupuesto, de qué manera comprar online, cómo distinguir si una prenda es o no de calidad, cómo armar un mapa de compras y cómo frenar los errores más comunes y cuáles son las prendas que valen la pena invertir. </p>
        <p className='info-texto'>Es una guía personal para desarrollar la habilidad de compras y lograr así un guardarropa eficiente, consciente en base a nuestro bolsillo y el cuidado del medio ambiente.</p>
        </Col>
        <Col md={6}>
        <div>
        <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={estilo2}
          alt="Img Carrusel Compras"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={estilo3}
          alt="Img Carrusel Compras"
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
        Son 2 encuentros que se pueden realizar de forma presencial u online. En el primer encuentro se realizan preguntas  y se da una conversación para detectar los errores que se están cometiendo. En el segundo encuentro vemos la guía juntas de cada pilar que debemos tener en cuenta al momento de realizar una compra y despejar dudas.
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
         $15.000 efectivo o transferencia.
         <br />
         $18.000 con tarjeta de crédito por mercado pago para residentes Argentinos.
         <br />
         US$ 50 por Western Union o PayPal para extranjeros.
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
