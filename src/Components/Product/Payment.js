// import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button ,Card} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


export default function Delivery() {
 
    const ab = useNavigate()
    const {price} = useParams()
    console.log(price)
  return (
    <Container fluid className="mx-auto gradient-custom mt-5" style={{ height: '100vh',width: '100vh', background: 'linear-gradient(to right, #667eea, #764ba2)' }}>
      <Row className="pt-3 mx-3">
        <Col md="3">
          <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
            <i className="fas fa-shipping-fast text-white fa-3x"></i>
            <h3 className="text-white">Welcome</h3>
            <p className="white-text">You are 30 seconds away from completing your order!</p>
          </div>
          <div className="text-center">
            <Button variant="light" rounded className="back-button" onClick={()=>ab('/cart')}>Go back</Button>
          </div>
         
        </Col>
        <Col md="9" className="justify-content-center">
          <Card className="card-custom pb-4">
            <Card.Body className="mt-0 mx-5">
              <div className="text-center mb-3 pb-2 mt-3">
                <h4 style={{ color: '#495057' }}>Delivery Details</h4>
              </div>

              <Form className="mb-0">
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="firstName">
                      <Form.Label>First name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="lastName">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="zip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="text-center mb-3 pb-2 mt-3">
                <h4 style={{ color: '#495057' }}>Payment Details</h4>
              </div>

              <Form className="mb-0">
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="cardNumber">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col>
                    <Form.Group controlId="expiryDate">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="cvv">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Card.Body>
        <Card.Title>Total Amount</Card.Title>
        <Card.Text>{`$${price}`}</Card.Text>
      </Card.Body>

                <div className="float-end">
                  <Button variant="primary" rounded className="submit-payment-button">Submit Payment</Button>
                </div>
              </Form>


              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}
