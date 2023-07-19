import React from 'react';
import { useNavigate } from 'react-router-dom';
const Card = ({ imageSrc, title }) => {
  
  return (
    <div className="card" >
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Some text describing the category...</p>
      </div>
    </div>
  );
};

const ProductCard = () => {
  const ab=useNavigate()
  return (
    
    <div className="container" id='cat' >
    <h1>category</h1>
    <br></br>
      <div className="row">
        <div className="col-md-3">
          <div className="card-container" onClick={()=>ab('/Clothes')}>
            <Card 
              imageSrc="https://thetrendytoddlers.com/cdn/shop/products/Mama_sCoffeCupBoys.jpg?v=1682526194"
              title="Clothing"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-container" onClick={()=>ab('/Toys')}>
            <Card
              imageSrc="https://5.imimg.com/data5/ANDROID/Default/2021/4/FU/CO/OA/111795961/product-jpeg-500x500.jpg"
              title="Toys"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-container"  onClick={()=>ab('/Food')}>
            <Card
              imageSrc="https://staranddaisy.in/wp-content/uploads/2022/09/spoonultrasoft_19.png"
              title="Feeding"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-container"  onClick={()=>ab('/Others')}>
            <Card
              imageSrc="https://img.freepik.com/free-photo/beauty-concept-with-basket_23-2147817623.jpg"
              title="Daily Care"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
