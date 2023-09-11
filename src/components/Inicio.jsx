import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import home from './assets/home.jpg'
import home1 from './assets/relleno.jpg'
import marmol from './assets/marmol.jpg'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export const Inicio = () => {
  return (
    <div>
      <h1 className='titulo-principal'>Vestirnos para
      <br />
       el éxito</h1>
      <div className='div-container'>
       <Container>
        <div className='texto-home'>
        <Row>

          <Col md={6}>
          <img src={home} alt="Img portada" className='home-img' />
          </Col>

          <Col md={6}>
          <p className='info-texto'>¡Bienvenido/a a mi sitio web! donde la belleza y la confianza se fusionan para transformar tu vida. Como asesora de imagen, mi objetivo es ayudarte a descubrir y potenciar tu belleza natural, a través de técnicas personalizadas y un servicio de calidad. </p>
          <p className='info-texto'>Creo firmemente que la belleza comienza desde el interior y se refleja en el exterior, por eso, mi enfoque va más allá de la apariencia física, se trata de descubrir quién eres y cómo quieres que el mundo te perciba. Mi misión es guiarte en este camino de autodescubrimiento para que puedas proyectar tu mejor versión y sentirte seguro/a de ti mismo/a en todo momento.</p>
          <p className='info-texto'>No importa si buscas un cambio de imagen total, o simplemente quieres refrescar tu estilo, mi enfoque personalizado te brindará las herramientas necesarias para lograr tus objetivos. Permíteme acompañarte en este viaje hacia la auto-confianza y la belleza interior, y descubre cómo una imagen poderosa puede transformar tu vida.</p>
          <p className='info-texto'>¡No esperes más para comenzar a brillar con tu propia luz! Contáctame para agendar una sesión personalizada y descubrir el potencial que hay en ti.</p>
          </Col>
        </Row>
        </div>

        <div className='servicios-home'>
        <Row>
         <Col md={6} className="d-flex justify-content-center text-center">
         <img src={home1} alt="Img servicios" className='home-img' />
         </Col>
         <Col md={6} className="d-flex justify-content-center text-center">
         <div className='home-div'>
          <h3 className='home-titulo'>Servicios</h3>
          <p className='home-texto'>Transforma tu imagen</p>
          <Link to={'/servicios'} className='boton'>Conoce mas</Link>
         </div>
         </Col>
        </Row>
        </div>
       </Container>
      </div>

      <div className='div-carrusel' >
      <Carousel>
      <Carousel.Item interval={3500} >
        <div className='carrusel-item' style={{ backgroundImage: `url(${marmol})` }} >
          <p>¡Vale, ame la asesoría de Colorimetría! Sin dudas un antes y un después en mi vida. Ahora se que colores me quedan bien, el tipo de maquillaje, accesorios y muuuucho más. Súper completo y recomendable. Gracias por tu buena onda, por la guía con todos los detalles y clarísimo como está explicado todo.</p>
          <p>Mayra Gorgerino - Argentina</p>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3500} >
        <div className='carrusel-item' style={{ backgroundImage: `url(${marmol})` }}>
          <p>¡Gracias es poco! Que experiencia increíble. Es como vos dijiste, sos la hada madrina que con la varita mágica te impulsá a sacar esa mujer empoderada que se lleva el mundo por delante. Gracias por tu calidez y por estar atenta a cada detalle. Cuando entre la primera vez y sonaba Bruno Mars dije: “esta mujer solo con eso se ganó mi corazón” jaja. Ojalá que todas las mujeres que andan en esa búsqueda, como yo, sepan que con vos encuentran esa escalera que las ayuda a subir y, por sobre todo, a brillar. ¡Vamos por más Valen! Gracias, gracias, gracias.</p>
          <p>Josefina Gutierrez - Argentina</p>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3500} >
        <div className='carrusel-item' style={{ backgroundImage: `url(${marmol})` }}>
          <p>Me encantó esta asesoría para poder descubrir mis colores. En realidad, me sorprendió la cantidad de tonos que puedo usar y, te agradezco de corazón porque ahora mi closet podrá tener un poco de vida y no solo el color negro. Eso es gracias a ti. Muy profesional en tu trabajo y realmente me sorprende cómo puedes ayudar a tantas personas como yo que piensan que algunos colores les quedan bien, pero realmente no les favorecen. Con tu trabajo nos ayudas a todas y estoy emocionada por seguir trabajando con Silueta.</p>
          <p>Josseline Moran - Estados Unidos</p>
        </div>
      </Carousel.Item>
    </Carousel>
      </div>

      <div className='div-frase'>
        <p className='home-titulo1'>Vale Asesorias es un lugar para conocerte, entender tu belleza y relucir tu esencia, llevandola a su maximo potencial.</p>
      </div>
    </div>
  )
}
