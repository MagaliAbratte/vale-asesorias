import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import estilo from '../assets/estilo/estilo.jpg';
import color from '../assets/color/color2.jpg';
import silueta from '../assets/silueta/silueta1.jpg';
import visagismo from '../assets/visagismo/visagismo.jpg';
import exito from '../assets/exito/exito.jpg';
import detox from '../assets/detox/detox.jpg';
import compras from '../assets/sobremi/sobremi.jpg';
import fiesta from '../assets/fiestas/fiestas1.jpg';
import charlas from '../assets/charlas/charlas.jpg';

export const Servicios = () => {
  return (
    <div className='div-container-servicios'>
      <Container className="container-center">
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center text-center">
            <Card style={{ width: '18rem' }} className='card'>
              <Card.Img variant="top" src={estilo} alt='Img Estilo Personal'/>
              <Card.Body>
                <Card.Title className='card-titulo'>Estilo Personal</Card.Title>
                <Card.Text className='card-texto'>
                  Asesorias
                </Card.Text>
                <Link to={'/estilopersonal'} className='card-boton'>Conoce más</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center text-center">
            <Card style={{ width: '18rem' }} >
              <Card.Img variant="top" src={color} alt='Img Colorimetria'/>
              <Card.Body>
                <Card.Title className='card-titulo'>Colorimetria</Card.Title>
                <Card.Text className='card-texto'>
                  Asesorias
                </Card.Text>
                <Link to={'/colorimetria'} className='card-boton'>Conoce más</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center text-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={silueta} alt='Img Silueta'/>
              <Card.Body>
                <Card.Title className='card-titulo'>Silueta</Card.Title>
                <Card.Text className='card-texto'>
                  Asesorias
                </Card.Text>
                <Link to={'/silueta'} className='card-boton'>Conoce más</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center text-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={visagismo} alt='Img Visagismo'/>
              <Card.Body>
                <Card.Title className='card-titulo'>Visagismo</Card.Title>
                <Card.Text className='card-texto'>
                  Asesorias
                </Card.Text>
                <Link to={'/visagismo'} className='card-boton'>Conoce más</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center text-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={exito}  alt='Img Exito'/>
              <Card.Body>
                <Card.Title className='card-titulo'>Vestirnos para el exito</Card.Title>
                <Card.Text className='card-texto'>
                  Asesoria Premium
                </Card.Text>
                <Link to={'/exito'} className='card-boton'>Conoce más</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center text-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={fiesta} alt='Img Fiestas'/>
              <Card.Body>
                <Card.Title className='card-titulo'>Fiestas y Eventos</Card.Title>
                <Card.Text className='card-texto'>
                  Asesoria Premium
                </Card.Text>
                <Link to={'/eventos'} className='card-boton'>Conoce más</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center text-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={compras} alt='Img Compras'/>
              <Card.Body>
                <Card.Title className='card-titulo'>Compras Inteligentes</Card.Title>
                <Card.Text className='card-texto'>
                  Guardarropas
                </Card.Text>
                <Link to={'/compras'} className='card-boton'>Conoce más</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center text-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={detox} alt='Img Detox'/>
              <Card.Body>
                <Card.Title className='card-titulo'>DETOX</Card.Title>
                <Card.Text className='card-texto'>
                  Guardarropas
                </Card.Text>
                <Link to={'/detox'} className='card-boton'>Conoce más</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center text-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={charlas} alt='Img Charlas'/>
              <Card.Body>
                <Card.Title className='card-titulo'>Charlas</Card.Title>
                <Card.Text className='card-texto'>
                  Charlas
                </Card.Text>
                <Link to={'/charlas'} className='card-boton'>Conoce más</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
