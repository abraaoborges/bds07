import './styles.css';

import ProductImg from 'assets/images/car-product-image.png';
import ButtonIconBuy from 'components/ButtonIconBuy';

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={ProductImg} alt="Nome do produto" />
        </div>
        <div className="card-bottom-container">
          <h6>Audi Supra TT</h6>
        </div>
        <div className="card-bottom-container-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div className="card-bottom-container-button">
          <ButtonIconBuy />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
