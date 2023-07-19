import React from 'react';
import {  FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => (

    <footer className='bg-light text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
   
        </div>

        <div className='d-flex'>
          <p className='me-4 text-reset'>
            <FaFacebook/>
          </p>
          <p className='me-4 text-reset'>
            <FaInstagram/>
          </p>
          <p className='me-4 text-reset'>
            <FaLinkedin/>
          </p>
        </div>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
               Baby Hub
              </h6>
              <p>
              Baby Hub: Your one-stop shop for quality baby products, making parenting easier with simplicity and style.
              </p>
            </Col>

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4' style={{textDecorationLine:"none"}}>
              <h6 className='text-uppercase fw-bold mb-4'>Category</h6>
              <p >
                <Link to='/Food'  className='text-reset'>
                 Feeding
                </Link>
              </p>
              <p>
                <Link to='/Clothes' className='text-reset'>
                Clothing

                </Link>
              </p>
              <p>
                <Link to='/Toys' className='text-reset'>
                 Toys
                </Link>
              </p>
              <p>
                <Link to='Others' className='text-reset'>
               Daily Care
                </Link>
              </p>
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#home' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#cat' className='text-reset'>
                  Category
                </a>
              </p>
             
            </Col>

          </Row>
        </Container>
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Your Baby Shop. All rights reserved.
          </p>
          <p className="mb-0">Made with ❤️ by Baby Hug</p>
        </div>
      </div>
    </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
    
      </div>
    </footer>
  

   
 
);

export default Footer;
