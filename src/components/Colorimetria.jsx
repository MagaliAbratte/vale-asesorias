import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import whatsapp from './assets/whatsapp.png'
import color1 from './assets/color1.jpg'
import color3 from './assets/color3.jpg'

export const Colorimetria = () => {
  return (
    <>
    <Container className='info-container'>
      <Row>
        <Col md={6}>
        <h2 className='info-titulo'>Colorimetria</h2>
        <p className='info-texto'>¿Queres descubrir qué colores realzan tu belleza natural y te hacen lucir radiante? ¡La colorimetría es el servicio que necesitas! Con esta técnica, identificarás cuáles son los colores que mejor se adaptan a tu tono de piel, cabello y ojos, y aprenderás a combinarlos de manera brillante.</p>
        <p className='info-texto'>Es un servicio único con la finalidad de realzar tu belleza, identificando los colores para lucir luminosa y espléndida. </p>
        <p className='info-texto'>Vas a optimizar tus compras de ropa en general, confiando en la certeza de cada elección. Además de conocer los metales que van a ir en la misma energía, tonalidades para maquillaje y los colores de cabello que podrían ser alternativas de cambio de tu tono natural sin fallar en el intento. Entender y conocer formas de usar colores que nos gustan pero que no son parte de nuestra paleta.</p>
        <p className='info-texto'>¡Atrévete a brillar con tu propia paleta de colores y reserva tu sesión de colorimetría hoy mismo! </p>
        </Col>
        <Col md={6}>
        <div>
        <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={color1}
          alt="Img Carrusel Color"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={color3}
          alt="Img Carrusel Color"
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
        Son 2 encuentros. Si el primer encuentro es presencial, se hace la prueba y se realiza el diagnóstico en vivo. Si el primer encuentro es online, se realizan preguntas y se indica el tipo de fotografía que se deberá enviar para poder hacer el diagnóstico. En el segundo encuentro, tanto presencial como online, vemos la guía personal en detalle, los colores, sus combinaciones y resolvemos dudas. 
        Tenemos modalidad PRESENCIAL en Córdoba Capital con dirección a coordinar una vez agendado el turno u ONLINE desde cualquier punto de Argentina o exterior del país.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='desplegable-titulo'><strong>FORMA DE TRABAJO</strong></Accordion.Header>
        <Accordion.Body className='desplegable-texto'>
        Al terminar la asesoría se entrega en formato PDF 2 guías, la paleta de color y otra con toda la explicación brindada y referencias con ejemplos.
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
