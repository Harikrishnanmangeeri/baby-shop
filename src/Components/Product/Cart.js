import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { MyContext } from "../../Context/Context";
import Count from "./count";
import { useNavigate } from "react-router-dom";
import NavbarMain from "../Navbar";

export default function PaymentMethods() {
  const ab = useNavigate();
  var { addtocart, product, totprice, setaddtocart } = useContext(MyContext);

  const [con, setcon] = useState(0);
console.log(con);
  const prdid = addtocart.map((pid) => {
    return parseInt(pid.productId);
  });

  // console.log(addtocart);

  const filterproduct = product.filter((p) => prdid.includes(p.id));
  const noofitems = filterproduct.length;
  console.log(noofitems);

  const totalsum = filterproduct.map((priceid) => {
    return priceid.price2 * priceid.qty;
  });

  for (let x of totalsum) {
    totprice = totprice + x;
  }
  // console.log(totalsum);
  // console.log(totprice);
  // const handleAddToCart = () => {

  // };
  // console.log(addtocart)

  const deleteitem = (e) => {
    const id = e.target.id;
    setaddtocart((b) => b.filter((x) => x.productId !== id));
  };

  // const newLocal = '/payment';
  return (
    <>
      <header className=" sticky-top">
        <NavbarMain />
      </header>
      <div className="d-flex">
      {filterproduct.map((x, i) => (
        <div key={x.id} >
          <section className="h-100 gradient-custom">
            <Container className="py-4  h-100">
              <Row className="justify-content-center  w-100">
                <Col md="8">
                  <Card className="mb-4">
                    <Card.Header className="py-3">
                      <h5 className="mb-0">Cart {noofitems} items</h5>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col lg="3" md="12" className="mb-4 mb-lg-0">
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

                        <Col lg="5" md="6" className=" mb-4 mb-lg-0">
                          <p>
                            <strong>{x.name}</strong>
                          </p>
                          <p></p>
                          <p></p>
                        </Col>
                        <Col lg="4" md="6" className="mb-4 mb-lg-0">
                          {/* //props//                */}
                          <Count obj={x} dummy={setcon} />

                          <p className="text-start text-md-center">
                            <strong>{x.price2}</strong>
                          </p>
                        </Col>
                      </Row>

                      <hr className="my-4" />

                      <Row className="d-flex justify-content-center">
                        <Button
                          className="w-25  fs-4 bg-white text-danger " 
                          id={x.id}
                          onClick={deleteitem}
                        >
                          {" "}
                          delete
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>

                  {/* <Button variant="light" size="sm" className="me-1 mb-2">
                      <FontAwesomeIcon icon={faTrash} />
                    </Button> */}
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      ))}
      <Col md="4">
      <Card className="mb-4">
        <Card.Body>
          <p>
            <strong>Expected shipping delivery</strong>
          </p>
          <p className="mb-0"></p>
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
              <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>{}</span>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span>
                  <strong>${totprice}</strong>
                </span>
              </ListGroupItem>
            </ListGroup>

            <Button block size="lg" onClick={() => ab(`/Delivery/${totprice}`)}>
              Go to checkout
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
    </>
  );
}
