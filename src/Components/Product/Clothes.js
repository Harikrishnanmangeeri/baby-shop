import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/Context';
import { Card} from "react-bootstrap"; 
import NavbarMain from '../Navbar';
import Footer from '../Footer';

const Clothes = ({ imageSrc, title }) => {
  const navigate = useNavigate();
  const { products } = useContext(MyContext);
  const filteredProducts = products.filter(
    (p) => p.type.toLowerCase() === 'clothes'
  );
  

  return (
    <div>
      <header  className=' sticky-top'><NavbarMain/></header>
      <br></br>
    <div className="container">
        <div className="row">
      {filteredProducts.map((product) => (
        <Card style={{ width: '18rem' }} onClick={()=>navigate(`/displayProduct/${product.id}`)} className="card-container">
      <Card.Img className="card-img-top" src={product.src} />
      <Card.Body>
        <Card.Title> {product.name}</Card.Title>
        <Card.Text >
          {product.price}
        </Card.Text>
       
      </Card.Body>
    </Card>
       
      ))}
      </div>
      </div>
      <br></br>
      <Footer/>
      </div>
      
  );
  
};

export default Clothes;
