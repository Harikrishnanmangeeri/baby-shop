import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { MyContext } from "../../Context/Context";
import Count from "./count";
import { useNavigate } from "react-router-dom";
import NavbarMain from "../Navbar";

export default function PaymentMethods() {
  const ab = useNavigate();
  const { addtocart, product, setaddtocart } = useContext(MyContext);

  const [con, setcon] = useState(0);
console.log(con);
  const prdid = addtocart.map((pid) => parseInt(pid.productId));

  const filterproduct = product.filter((p) => prdid.includes(p.id));
  const noofitems = filterproduct.length;

  const totalsum = filterproduct.map((priceid) => priceid.price2 * priceid.qty);
  const totprice = totalsum.reduce((acc, val) => acc + val, 0);

  const deleteitem = (e) => {
    const id = e.target.id;
    setaddtocart((b) => b.filter((x) => x.productId !== id));
  };

  return (
    <>
      <header className="sticky-top">
        <NavbarMain />
      </header>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(to right, #48c6ef, #6f86d6)",
          minHeight: "100vh",
          fontFamily: "Arial, sans-serif",
          color: "#fff",
        }}
      >
        <Container>
          <Row>
            <Col md={8}>
              <h3 className="mb-4">Cart ({noofitems} items)</h3>
              <ListGroup>
                {filterproduct.map((x) => (
                  <ListGroup.Item
                    key={x.id}
                    style={{
                      backgroundColor: "#f8f8f8",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      marginBottom: "10px",
                      color: "#333",
                    }}
                  >
                    <Row>
                      <Col md={3} className="mb-4 mb-lg-0">
                        <div className="bg-image rounded hover-zoom hover-overlay">
                          <img src={x.src} alt="Photos" className="w-100" />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                      </Col>

                      <Col md={5} className="mb-4 mb-lg-0 d-flex align-items-center">
                        <p className="mb-0">
                          <strong>{x.name}</strong>
                        </p>
                      </Col>
                      <Col md={4} className="mb-4 mb-lg-0 d-flex align-items-center">
                        {/* //props//                */}
                        <Count obj={x} dummy={setcon} />
                        <p className="mb-0 ml-3">
                          <strong>{x.price2}</strong>
                        </p>
                      </Col>
                    </Row>
                    <Button
                      className="w-25 fs-4 bg-white text-danger mt-3"
                      id={x.id}
                      onClick={deleteitem}
                    >
                      Delete
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">Your items will be delivered soon!</p>
                </Card.Body>
              </Card>

              <Card className="mb-4 mb-lg-0">
                <Card.Body>
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">Summary</h5>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{noofitems}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>${totprice}</strong>
                      </span>
                    </ListGroup.Item>
                  </ListGroup>

                  <Button
                    block
                    size="lg"
                    onClick={() => ab(`/Delivery/${totprice}`)}
                  >
                    Go to checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
