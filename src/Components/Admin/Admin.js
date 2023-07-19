import React, { useContext } from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/Context';

const AdminPage = () => {
  const {setuser} =useContext(MyContext)
  const ab=useNavigate()
  
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0  ">
          <Navbar expand="sm" className="flex-column align-items-start px-3 pt-2 min-vh-100 text-white bg-dark ">
            <Navbar.Brand href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </Navbar.Brand>
            <Nav className="nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
             
               
                  <Button  onClick={()=>ab('/pa')}  className="text-black">
                    Add Product
                  </Button>
                
             
              
                  <NavDropdown title="Products" className="nav-link px-0 align-middle text-white">
                   <div style={{ padding: '10px 20px', backgroundColor: '#f8f9fa' }}>
                <NavDropdown.Item onClick={()=>ab('/AdminToys')} className="text-dark text-decoration-none">Toys</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>ab('/AdminClothes')} className="text-dark text-decoration-none">Clothes</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>ab('/AdminFood')} className="text-dark text-decoration-none">Food</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>ab('/AdminOthers')} className="text-dark text-decoration-none" >Others</NavDropdown.Item>
                </div>
              </NavDropdown>
             
                <Button variant="link" onClick={()=>ab('/adminProduct')} className="text-white text-decoration-none">
                  All Product
                  </Button>
                  <br></br>
                  <Button variant="link" onClick={()=>ab('/AdminUser')} className="text-white text-decoration-none">
                   Users
                  </Button>
                  <Button variant="link" onClick={()=>{setuser(false);ab('/')}} className="text-white text-decoration-none">
                   logOut
                  </Button>
                
            </Nav>
            <hr />
          </Navbar>
          
        </div>
        <div className="p-3 mb-2 bg-warning text-dark ">
          <h1 className='text-white'>Hi Admin...</h1>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
