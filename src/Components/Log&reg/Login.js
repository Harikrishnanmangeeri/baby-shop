import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/Context';
import './Login.css'; // Import the CSS file for styling

function Login() {
  const { value, setvalue, setuser, setUsername } = useContext(MyContext);
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const ab = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleToggleModal = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = (event) => {
    
    event.preventDefault();
    const Emailname1 = event.target.emaillog.value;
    const passwordlg = event.target.passwordlog.value;
       

    if (Emailname1 === 'admin@gmail.com' && passwordlg === 'admin') {
      ab('/Admin');
      setuser(true);
    } else {
      const values = value.filter((x) => x.emailname === Emailname1);
      if (values.length > 0 && values[0].pass1 === passwordlg) {
        const userName = values[0].Fname;
        setUsername(userName);
        console.log(setuser);
        setuser(true);
        ab('/');
      } else {
        alert('Please register or check your email & password');
      }
    }

    handleClose();
 

  };

  const handleRegister = (event) => {
    event.preventDefault();
    const fname = event.target.firstName.value;
    // const lname = event.target.lastName.value;
    const Emailname = event.target.email.value;
    const password1 = event.target.password.value;
    const Password2 = event.target.confirmPassword.value;
    setvalue([
      ...value,
      { id: Math.random(), Fname: fname, emailname: Emailname, pass1: password1, pass2: Password2 }
    ]);
    ab('/');
    
  };

  return (
    <>
      <Button variant="btn btn-outline-primary" onClick={handleShow}>
        Login/Register
      </Button>
      {showLogin ? (

      <Modal show={showModal} onHide={handleClose} className="login-modal">

       
            

<Modal.Header closeButton>
  <Modal.Title>{showLogin ? 'Login' : 'Registration'}</Modal.Title>
</Modal.Header>
<Modal.Body>
            <Form onSubmit={handleLogin} >
              <Form.Group className="mb-3">
                <input
                  type="email"
                  id="emaillog"
                  required
                  placeholder="Enter email"
                  style={{
                    width:"60vh",
                    height:"5vh"
                  }}
                  // className="form-control-transparent"

                
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <input
                  type="password"
                  id="passwordlog"
                  placeholder="Password"
                  style={{
                    width:"60vh",
                    height:"5vh",
                    // borderRadius:'2px'
                  }}
                  // className="form-control-transparent"
                />
              </Form.Group>

              <div className="modal-buttons">
                <Button variant="primary" type="submit">
                  Login
                </Button>
                <Button variant="secondary" onClick={handleToggleModal}>
                  Register
                </Button>
              </div>
            </Form>
            </Modal.Body>
      </Modal>
            
          )  : (
            <Modal show={showModal} onHide={handleClose} className="login-modal">
            <Modal.Header closeButton>
  <Modal.Title>{showLogin ? 'Login' : 'Registration'}</Modal.Title>
</Modal.Header>
            <Modal.Body>

            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3">
                {/* <Form.Label htmlFor="firstName" className='lab'>Full Name</Form.Label> */}
                <Form.Control type="text" id="firstName" placeholder="User Name" />
              </Form.Group>

              {/* <Form.Group className="mb-3">
                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                <Form.Control type="text" id="lastName" placeholder="Last Name" />
              </Form.Group> */}

              <Form.Group className="mb-3">
                {/* <Form.Label htmlFor="email" className='lab'>Email</Form.Label> */}
                <Form.Control type="email" id="email" required placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                {/* <Form.Label htmlFor="password" className='lab'>Password</Form.Label> */}
                <Form.Control type="password" id="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3">
                {/* <Form.Label htmlFor="confirmPassword" className='lab'>Confirm Password</Form.Label> */}
                <Form.Control type="password" id="confirmPassword" placeholder="Confirm Password" />
              </Form.Group>

              <div className="modal-buttons">
                <Button variant="primary" type="submit" >
                  Register
                </Button>
                <Button variant="secondary"  onClick={handleToggleModal}>
                  Login
                </Button>
              </div>
            </Form>
            </Modal.Body>
      </Modal>
          )}
          
      
    </>
  );
}

export default Login;
