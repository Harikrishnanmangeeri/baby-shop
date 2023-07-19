import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Search from './search';
import { MyContext } from '../Context/Context';
import Login from './Log&reg/Login';
import { Button } from 'react-bootstrap';

const NavbarMain = () => {
  const { user, setuser, username, setUsername } = useContext(MyContext);
  const ab = useNavigate();

  const handleLogout = () => {
    ab('/');
    setuser(false);
    setUsername([]);
    alert('Logged out successfully');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/105/105627.png?w=740&t=st=1688632907~exp=1688633507~hmac=9da84e8f28bd66747110aacd9543961698b05946e326fa2d44e2e9e9e575c3f8"
            width={25}
            alt="Photos"
            className="img-fluid rounded"
          />
          Baby Hug
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cat">Shop</Nav.Link>
            <Nav.Link href="#all" onClick={() => ab('/Allproduct')}>
              All product
            </Nav.Link>
            <Nav.Link href="#offer">Offer</Nav.Link>
          </Nav>
          <div className='me-2'>
            <Search className='my-2 mt-5'/>
          </div>
          <Nav className="align-items-end" style={{ maxHeight: '100px' }} navbarScroll>
            <img
              src="https://cdn-icons-png.flaticon.com/128/8426/8426086.png"
              width={25}
              alt="Photos"
              className="img-fluid rounded m-4 me-1 "
              onClick={() => {
                user ? ab('/cart') : alert('You must log in first');
              }}
            />
            {user === false ? (
              <div className='m-3 me-1'>
                <Login />
              </div>
            ) : (
              <Button variant="outline-info" className='m-3 me-1' onClick={handleLogout}>
                LogOut
              </Button>
            )}

            <div className='m-4 me-1'>
              <img
                src="https://img.icons8.com/?size=512&id=98957&format=png"
                width={25}
                alt="Photos"
              />
              
              <span className='text-uppercase font-italic'>{username}</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
