import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/Context';
import { Card } from "react-bootstrap"; 
import NavbarMain from '../Navbar';
import Footer from '../Footer';

const Others = ({ imageSrc, title }) => {
  const navigate = useNavigate();
  const { products } = useContext(MyContext);
  const filteredProducts = products.filter(
    (p) => p.type.toLowerCase() === 'other'
  );

  

  

  return (
    <div>
      <header  className=' sticky-top'><NavbarMain/></header>
      <br></br>
    <div className="container py-5">
        <div className="row">
         <div className='d-flex flex-wrap justify-content-center '>
      {filteredProducts.map((products) => (
        <Card  style={{ width: '20%', marginBottom: '10px', marginRight: '10px' }} onClick={()=>navigate(`/displayProduct/${products.id}`)} className="card-container">
      <Card.Img className='card-img-top' variant="top" src={products.src} />
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        <Card.Text>
          {products.price}
        </Card.Text>

      </Card.Body>
    </Card>
       
      ))}
      </div>
      </div>
      </div>
      <Footer/>
      </div>
    
  );
};

export default Others;
