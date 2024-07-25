import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import home from '../assets/home/home.jpg'
import home1 from '../assets/home/relleno.jpg'
import marmol from '../assets/home/marmol.jpg'
import instagram from '../assets/contacto/instagram.png';
import whatsapp from '../assets/contacto/whatsapp.png';
import tiktok from '../assets/contacto/tiktok.png'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

export const Inicio = () => {

  const navigate = useNavigate()

  const handleNavigate = () =>{
    navigate('/servicios')
  }

  return (
    <>
    <div className="mt-4">
      <h1 className="titulo-principal1 display-4 text-center mt-4 pt-4">Asesoria de Imagen</h1>
      <div className="p-2 titulo-home text-center">
        <h4 
          className="titulo-principal d-inline-block d-md-block" 
          onClick={handleNavigate} 
          style={{ cursor: 'pointer' }}
        >
          Vestite para el éxito
        </h4>
      </div>

      <div>
        <Container>
          <div className='mb-5'>
            <Row className="align-items-center text-center text-md-start">
              <Col md={6}>
                <img src={home} alt="Img portada" className='home-img img-fluid w-75' />
              </Col>
              <Col md={6}>
                <p className='mt-4 fs-4'>Mi misión es ayudarte a potenciar y proyectar una imagen segura de ti misma en todo momento. Vístete con un look libre y consciente, desde el lado más humano, con empatía, comprensión y escucha.</p>
              </Col>
            </Row>
          </div>

        <div className='servicios-home'>
        <Row>
         <Col md={7} className="d-flex justify-content-center text-center">
         <img src={home1} alt="Img servicios" className='home-img' />
         </Col>
         <Col md={5} className="d-flex justify-content-center text-center">
         <div className='home-div'>
          <h2 className='home-titulo'>Servicios</h2>
          <h3 className='home-texto'>Transforma tu imagen</h3>
          <Link to={'/servicios'} className='boton'>Conoce más</Link>
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

      <div className='mb-5'>
        <div className='home-redes'>
          <a href="https://api.whatsapp.com/send?phone=5493491506441" target='_blank'>
           <img src={whatsapp} alt="Icono Whatsapp" className='icono-home'/>
          </a>
          <a href="https://www.instagram.com/vale.asesorias/" target='_blank' rel='noopener noreferrer'>
           <img src={instagram} alt="Icono Instagram" className='icono-home'/>
          </a>
          <a href="https://www.tiktok.com/@valeasesorias" target='_blank' rel='noopener noreferrer'>
           <img src={tiktok} alt="Icono Tiktok" className='icono-home'/>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
