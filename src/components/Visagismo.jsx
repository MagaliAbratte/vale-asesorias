import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import visagismo1 from './assets/visagismo1.jpg'
import visagismo2 from './assets/visagismo2.jpg'
import Accordion from 'react-bootstrap/Accordion';
import whatsapp from './assets/whatsapp.png'

export const Visagismo = () => {
  return (
    <>
    <Container className='info-container'>
      <Row>
        <Col md={6}>
        <h2 className='info-titulo'>Visagismo</h2>
        <p className='info-texto'>¿Quieres saber qué tipo de corte de cabello se adapta mejor a tu rostro? ¿Tenes que comprar unos nuevos lentes de sol y no sabes cuál elegir? ¡El servicio de visagismo es la respuesta! Con esta técnica, analizaremos tus características y te brindaré recomendaciones personalizadas para resaltar tu belleza natural. </p>
        <p className='info-texto'>Te enseñaré cómo elegir corte de cabello y tipo de peinados según situación. Veremos tipos de accesorios como aros, collares, pañuelos, gorros, sombreros, lentes de sol, lentes de ver y maquillaje adecuado para tus rasgos.</p>
        <p className='info-texto'>Incluye una clase de automaquillaje con Magali Abratte, maquilladora profesional para saber en detalle los pasos que te harán realzar y tips de productos adecuados para una rutina diaria o salidas.</p>
        </Col>
        <Col md={6}>
        <div>
        <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={visagismo1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={visagismo2}
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
        Son 2 encuentros. Si el primer encuentro es presencial, se hace la prueba y se realiza el diagnóstico en vivo. Si el primer encuentro es online, se realizan preguntas y se indica el tipo de fotografía que se deberá enviar para poder hacer el diagnóstico. En el segundo encuentro, tanto presencial como online, vemos la guía personal en detalle, los colores, sus combinaciones y resolvemos dudas + clase de automaquillaje con Magali. 
        Tenemos modalidad PRESENCIAL en Córdoba Capital con dirección a coordinar una vez agendado el turno u ONLINE desde cualquier punto de Argentina o exterior del país.
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
        $17.000 efectivo o transferencia.
        <br />
        $20.000  tarjeta de crédito por Mercado Pago para residentes Argentinos.
        <br />
        US$50 por Western Union o PayPal para extranjeros. 
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
