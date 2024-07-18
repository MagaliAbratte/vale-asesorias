import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import instagram from '../assets/contacto/instagram.png';
import whatsapp from '../assets/contacto/whatsapp.png';
import gmail from '../assets/contacto/gmail.png';
import tiktok from '../assets/contacto/tiktok.png'

export const Contacto = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className='div-contacto'>
              <h2 className='h2-contacto'>CONTACTO</h2>
              <div className='div-infocontacto'>
                <a href="https://api.whatsapp.com/send?phone=5493491506441" target='_blank'>
                  <img src={whatsapp} alt="Icono Whatsapp" className='icono-contacto'/>
                </a>
                <p className='texto-contacto'>+54 9 3491 50-6441</p>
              </div>
              <div className='div-infocontacto'>
                <a href="mailto:asesoria.aballay@gmail.com">
                  <img src={gmail} alt="Icono Email" className='icono-contacto'/>
                </a>
                <p className='texto-contacto'>asesoria.aballay@gmail.com</p>
              </div>
              <div className='div-infocontacto'>
                <a href="https://www.instagram.com/vale.asesorias/" target='_blank' rel='noopener noreferrer'>
                  <img src={instagram} alt="Icono Instagram" className='icono-contacto'/>
                </a>
                <p className='texto-contacto'>@vale.asesorias</p>
              </div>
              <div className='div-infocontacto'>
                <a href="https://www.tiktok.com/@valeasesorias" target='_blank' rel='noopener noreferrer'>
                  <img src={tiktok} alt="Icono Tiktok" className='icono-contacto'/>
                </a>
                <p className='texto-contacto'>@valeasesorias</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
