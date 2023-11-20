/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type TelaHomeProps = {
  seletorView: Function;
};

const TelaHome: React.FC<TelaHomeProps> = ({ seletorView }) => {
  useEffect(() => {
    // Inicialização do Materialize CSS
    M.AutoInit();

    // Inicialização do Carousel
    const options: Partial<M.CarouselOptions> = {
      fullWidth: true,
    };

    const elems = document.querySelectorAll('.carousel');
    const instance = M.Carousel.init(elems, options);
  }, []);

  return (
    <div>
      <div className="carousel carousel-slider container z-depth-3" style={{ marginTop: '50px', width: '100%', height: '600px', objectFit: 'cover' }}>
        <a className="carousel-item">
          <img src={require('../img/beauty.png')} alt="Imagem Local" style={{ height: '600px' }} />
        </a>
        <a className="carousel-item">
          <img src={require('../img/8409267.jpg')} alt="Imagem Local 2" style={{ height: '600px' }} />
        </a>
        <a className="carousel-item">
          <img src={require('../img/7765390.jpg')} alt="Imagem Local 3" style={{ height: '600px' }} />
        </a>
        <a className="carousel-item">
          <img src={require('../img/4374096.jpg')} alt="Imagem Local 4" style={{ height: '600px' }} />
        </a>
        <a className="carousel-item">
          <img src={require('../img/9019185.jpg')} alt="Imagem Local 5" style={{ height: '600px' }} />
        </a>
      </div>

      <div className="container" style={{ marginTop: '30px' }}>
        <div className="row">
          <div className="col s12 m4">
            <div className="center-align">
              <h4>Desenvolvimento</h4>
              <h5>Fizemos a maior parte do trabalho pesado para fornecer estilos padrão que incorporassem nossos componentes personalizados.</h5>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="center-align">
              <h4>Foco</h4>
              <h5>Utilizando elementos e princípios do Material Design, conseguimos criar uma estrutura com foco na Experiência do Usuário.</h5>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="center-align">
              <h4>Fácil de trabalhar</h4>
              <h5>Fornecemos documentação detalhada, bem como exemplos de código específicos para ajudar novos usuários a começar.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaHome;
