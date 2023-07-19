import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/Context';

import { Button } from 'react-bootstrap';


const Allproduct = () => {
  const { products } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <>
    <section id='all' style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row">
          {products.map((product, i) => (
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0" key={i}>
              <div className="card shadow-sm h-100">
                <div className="d-flex justify-content-between p-3">
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: '35px', height: '35px' }}
                  >
                    <p className="text-white mb-0 small">x4</p>
                  </div>
                </div>
                <img src={product.src} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h2 className="small">{product.name}</h2>
                    <p className="small text-danger">
                      <s>{product.price}</s>
                    </p>
                  </div>

                  <div className="mb-3">
                    <h5 className="text-dark mb-0">${product.price2}</h5>
                  </div>

                  <Button
                    variant="primary"
                    className="ms-1 card-container"
                    onClick={() => navigate(`/displayProduct/${product.id}`)}
                    type="submit"
                  >
                    Add to cart <i className="fas fa-shopping-cart ms-1"></i>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   
</>
  );
};

export default Allproduct;
