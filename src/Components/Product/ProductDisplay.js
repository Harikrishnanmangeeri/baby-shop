import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MyContext } from '../../Context/Context';
import { useNavigate, useParams } from 'react-router-dom';
import NavbarMain from '../Navbar';


const ProductDetails = () => {
  const ab = useNavigate()
    const {products,addtocart,setaddtocart,user} =useContext(MyContext)
   
  //  console.log(value);
  

    const { id } = useParams()
  
    const productID = addtocart.map((pid)=>pid.productId) 
    // console.log(productID);
  const productfilter=products.filter(
    (p) => (p.id === parseFloat(id))
    
  )
  
  const idproduct = (e) => {
    const id = e.target.id;
    
    if (user===true){
      if (productID.includes(id)){
        alert ("Your product already in your cart")
      }
      else{
        
        console.log(id);
        setaddtocart([...addtocart, { productId: id }]);
        ab('/cart');
      }
    } 
    else {
      alert("must login")
      ab('/');
    }
   
  };
  console.log(user); 
 
console.log(addtocart);

  console.log(productfilter);
  return (
    <>
    <div  className=' sticky-top'>
      <NavbarMain/>
    </div>
    { productfilter.map((products) => (
        <div key={products.id}>
          <main className="mt-5 pt-4">
            <Container className="mt-5">
              <Row>
                <Col md={6} mb={4}>
                  <img src={products.src} className="img-fluid card-container shadow p-3 mb-5 bg-white rounded" alt="Photos" />
                </Col>

                <Col md={6} mb={4}>
                  <div className="p-4">
                    <p className="lead">
                      <span className="me-1">
                      <h1>{products.name}</h1>
                        <del>{products.price}</del>
                      </span>
                      <h3><span className='blockquote-footer'>  Offer Price</span>{products.price2}</h3>
                    </p>

                    <strong>
                      <p style={{ fontSize: '20px' }}>Description</p>
                    </strong>

                    <p>
                      {products.Discription}
                    </p>

                    <Form className=" justify-content-left d-flex p-2">
                      <div className="form-outline me-1" style={{ width: '100px' }}>
                        <Form.Control type="number" defaultValue="1" />
                      </div>
                      <Button variant="primary" className="ms-1 card-container " id={products.id} onClick={idproduct} type="submit">Add to cart <i className="fas fa-shopping-cart ms-1"></i>
                      </Button>
                   
                      
                    </Form>
                    <div>
                    <button type="button" class="btn btn-outline-primary btn-lg " id={products.id} onClick={idproduct} >BUY NOW</button>
                    </div>
                  </div>
                </Col>
              </Row>

              <hr />

              <Row className="d-flex justify-content-center">
  <Col md={6} className="text-center">
    <h4 className="my-4 h4">Product Details</h4>
    <p>
      Welcome to our baby store! We provide the best products for your little ones. Our baby products are carefully selected to ensure safety, comfort, and joy for your baby. From cute clothing to essential baby gear, we've got you covered!
    </p>
  </Col>
</Row>

              <Row>
                <Col lg={4} md={12} mb={4}>
                  <img
                    src="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc1OTI2MjAxOTUyMTI0/unique-baby-names-2019-jpg.jpg"
                    className="img-fluid"
                    alt="Photos"
                  />
                </Col>
                <Col lg={4} md={6} mb={4}>
                  <img
                    src="https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc1OTI2MjAxOTUyMTI0/unique-baby-names-2019-jpg.jpg"
                    className="img-fluid"
                    alt="Photos"
                  />
                </Col>
                <Col lg={4} md={6} mb={4}>
                  <img
                    src="https://www.plunket.org.nz/assets/page-header/baby-lying-on-pink-bed-1556706-v2__FillMaxWzU0NCwzMjhd.jpg"
                    className="img-fluid"
                    alt="Photos"
                  />
                </Col>
              </Row>
            </Container>
          </main>
        </div>
      ))}
      </>
    
  );
};

export default ProductDetails;
