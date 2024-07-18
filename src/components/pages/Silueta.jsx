import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import silueta2 from '../assets/silueta/silueta2.jpg'
import silueta3 from '../assets/silueta/silueta3.jpg'
import whatsapp from '../assets/contacto/whatsapp.png'

export const Silueta = () => {
  return (
    <>
    <Container className='info-container'>
      <Row>
        <Col md={6}>
        <h2 className='info-titulo'>Silueta</h2>
        <p className='info-texto'>Analizamos la morfología del cuerpo y sus atributos para comprender y entender la silueta. Una vez estudiada podremos saber qué tipologías de prendas nos favorecen, los cortes y diseños que nos hacen sentir cómodas y lindas, vemos de qué manera utilizar el estampado a nuestro favor, la distribución de los colores, los tipos de textiles a tener en cuenta y que prendas o diseño va ser mejor que evitemos usar.</p>
        <p className='info-texto'>La finalidad de éste servicio es tomar los puntos fuertes, esas partes que nos gustan y embellecerlas de tal manera que nos haga ganar confianza en nosotras mismas. Saber todo nuestro potencial hace que logremos una imagen fuerte y cómoda.</p>
        </Col>
        <Col md={6}>
        <div>
        <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={silueta2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={silueta3}
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
        Son 2 encuentros. Si el primer encuentro es presencial, se hace la prueba y se realiza el diagnóstico en vivo. Si el primer encuentro es online, se realizan preguntas y se indica el tipo de fotografía que se deberá enviar para poder hacer el diagnóstico. En el segundo encuentro, tanto presencial como online, vemos la guía personal en detalle, los colores, sus combinaciones y resolvemos dudas. 
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
