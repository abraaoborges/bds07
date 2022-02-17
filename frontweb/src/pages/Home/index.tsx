import MainImage from 'assets/images/car-main-image.png';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base card home-card-sup">
        <div className="home-image-container">
          <img src={MainImage} alt="Car" />
        </div>
        <div className="home-image-legend">
          <h1 >O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>

      <div className="base card home-card-inf">
        <div>
          <Link to="/products">          
            <ButtonIcon />
          </Link>
        </div>
        <div>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
