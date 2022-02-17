import './styles.css';
import ProductCard from 'components/ProductCard';
import ButtonIconSearch from 'components/ButtonIconSearch';

const Catalog = () => {
  return (
    <>
      {/* <div className="general-container"> */}
        <div className="base-card product-search">
          <div className="search-container">
            <input
              type="text"
              id="txtSearch"
              placeholder="Digite sua busca"
            ></input>
            <div className="card-bottom-container-button">
              <ButtonIconSearch />
            </div>
          </div>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>{' '}
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>{' '}
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>{' '}
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>{' '}
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Catalog;
