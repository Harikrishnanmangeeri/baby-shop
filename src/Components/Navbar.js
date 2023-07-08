import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
const NavbarMain = () => {
  const ab=useNavigate()
  return (
    <div>
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://cdn-icons-png.flaticon.com/512/105/105627.png?w=740&t=st=1688632907~exp=1688633507~hmac=9da84e8f28bd66747110aacd9543961698b05946e326fa2d44e2e9e9e575c3f8" width={25} alt='Photos' class="img-fluid rounded" />  Baby Shower</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">Shop</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#">Testimonial</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        
          </Form>
          <Nav
            className="align-items-end"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><img src="https://img.icons8.com/?size=512&id=8615&format=png" width={25} alt='Photos' class="img-fluid rounded"/> </Nav.Link>
            <NavDropdown id="navbarScrollingDropdown" title={<img src="https://img.icons8.com/?size=512&id=98957&format=png" width={25} alt='Photos' className="img-fluid rounded" />} align="end" className="custom-dropdown">
              <NavDropdown.Item href="#action3"><img src="https://img.icons8.com/?size=512&id=98957&format=png" width={25} alt='Photos' class="img-fluid rounded"/></NavDropdown.Item>
              <NavDropdown.Item href="#action7">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={()=>ab('/Registration')}>
                SignUp
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                LogOut
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </div>
  )
}

export default NavbarMain