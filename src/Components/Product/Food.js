import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/Context';
import { Card } from 'react-bootstrap';
import NavbarMain from '../Navbar';
import Footer from '../Footer';

const Food = ({ imageSrc, title }) => {
  const navigate = useNavigate();
  const { products } = useContext(MyContext);
  const filteredProducts = products.filter((p) => p.type.toLowerCase() === 'food');

  return (
    <div>
      <header className='sticky-top'>
        <NavbarMain />
      </header>
      <br />
      <div className='container py-5'>
        <div className='row'>
          <div className='d-flex flex-wrap justify-content-center '>
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                style={{ width: '20%', marginBottom: '10px', marginRight: '10px' }}
                onClick={() => navigate(`/displayProduct/${product.id}`)}
                className='card-container'
              >
                <Card.Img className='card-img-top' src={product.src} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Food;
