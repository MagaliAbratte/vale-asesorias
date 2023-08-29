import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import whatsapp from './assets/whatsapp.png'
import charlas1 from './assets/charlas1.jpg'
import charlas2 from './assets/charlas2.jpg'
import charlas3 from './assets/charlas3.jpg'

export const Charlas = () => {
  return (
    <>
    <Container className='info-container'>
      <Row>
        <Col md={6}>
        <h2 className='info-titulo'>Charlas</h2>
        <p className='info-texto'>Las charlas se dan en un espacio de confianza para poder conversar y despejar dudas que se presentan en la vida cotidiana del vestir, el enfoque es dar herramientas claves para lucir radiantes, se trata de generar un momento cargado de información que podrán atesorar y recordar.</p>
        <p className='info-texto'>Si sos una empresa, local, emprendimiento o simplemente un grupo de amigas en búsqueda de una charla grupal sobre temas de colorimetría, el poder del color, silueta (cómo vestir cada cuerpo), comunicación a través del estilo personal y compras inteligentes te podés contactar conmigo para programarla.</p>
        <p className='info-texto'>El valor de la charla será según la cantidad de temas a abordar y el tiempo dispuesto.</p>
        </Col>
        <Col md={6}>
        <div>
        <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={charlas1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={charlas2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={charlas3}
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
        <div className='div-mensaje'>
          <h4>¡Quiero mas info!</h4>
          <a href="https://api.whatsapp.com/send?phone=3491506441" target='_blank'><img src={whatsapp} alt="Icono Whatsapp" className='icono-mensaje'/></a>
        </div>
        </Col>
      </Row>
    </Container>
   </>
  )
}
