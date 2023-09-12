import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import exito from './assets/sobremi1.jpg'
import exito1 from './assets/exito.jpg'
import Accordion from 'react-bootstrap/Accordion';
import whatsapp from './assets/whatsapp.png'

export const Exito = () => {
  return (
    <>
    <Container className='info-container'>
      <Row>
        <Col md={6}>
        <h2 className='info-titulo1'>Vestirnos para el exito</h2>
        <h4 className='info-subtitulo'>Asesoria Premium</h4>
        <p className='info-texto'>10 semanas para una transformación completa en dirección a vestir el alma, proyectar lo deseado, ganar confianza total en nuestra imagen y potenciar el guardarropa.</p>
        <p className='info-texto'>Vamos a trabajar 5 pilares: COLORIMETRÍA / SILUETA / VISAGISMO/ ESTILO Y COMUNICACIÓN / GUARDARROPA Y COMPRAS</p>
        <p className='info-texto'>Vamos a lograr una imagen alineada, coherente. Se trata de un trabajo en equipo juntas para vestir tu esencia y sacar provecho a todo tu potencial teniendo en cuenta colores, diseños y morfologías que realzan tu belleza natural. </p>
        <p className='info-texto'>Es un trabajo intenso de raíz para ordenar el guardarropa con la finalidad de que te puedas proyectar, vestir todos los días sin dolor de cabeza y te sientas vos misma en todo momento y planes de tu vida. </p>
        </Col>
        <Col md={6}>
        <div>
        <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={exito}
          alt="Img Carrusel Exito"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={exito1}
          alt="Img Carrusel Exito"
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
        Son 1 encuentro por semana que se pueden realizar de forma presencial u online. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='desplegable-titulo'><strong>FORMA DE TRABAJO</strong></Accordion.Header>
        <Accordion.Body className='desplegable-texto'>
        SEMANA 1: Se realizan preguntas y diagnósticos sobre colorimetría, silueta y visagismo.
        <br />
        SEMANA 2: hablamos en profundidad de todos los colores que te potencian.
        <br />
        SEMANA 3: Vemos diseños, morfologías, textiles, estampados, colores y tipo de prendas que favorecen a la silueta.
        <br />
        SEMANA 4: Hablamos sobre diseños de accesorios en general como lentes de sol, aros y sombreros, cortes de cabello y formas de peinado, maquillaje y ejemplos de referencias.
        <br />
        SEMANA 5: Se realizan preguntas sobre estilo, vamos a empezar analizar lo que deseas proyectar, poner en palabras todo el universo que vamos a crear.
        <br />
        SEMANA 6: Vemos dónde estamos paradas, que cosas vamos a corregir para empezar a pulir el estilo deseado.
        <br />
        SEMANA 7: Visualizamos los ejemplos e imágenes de referencia que van a ser una guía para armar los looks en miras al estilismo que queremos lograr.
        <br />
        SEMANA 8: Detox y orden de guardarropa, se va todo lo que no está alineado con el objetivo y se queda todo aquello que es ideal para la rutina bajo la estética e imagen creada. 
        <br />
        SEMANA 9: Armamos lista de compras en base a la imagen deseada y teniendo en cuenta el estado actual del guardarropas luego del detox. 
        <br />
        SEMANA 10: Marcas y lugares que podemos encontrar todo lo atinado a la imagen. Compras y definir presupuesto, cuándo y cómo comprar.
        <br />
        Al terminar la asesoría se entrega en formato PDF 1 guía personal con toda la explicación brindada y referencias con ejemplos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='desplegable-titulo'><strong>VALOR Y FORMA DE PAGO</strong></Accordion.Header>
        <Accordion.Body className='desplegable-texto'>
        $90.000 efectivo o transferencia.
        <br />
        US$170 por Western Union o PayPal para extranjeros. 
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
