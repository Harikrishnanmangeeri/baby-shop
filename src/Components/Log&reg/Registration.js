// import React, { useContext, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
// import { MyContext } from '../../Context/Context';
// import './Login.css'; // Import the CSS file for styling

// const Registration = () => {
//   const [showModal, setShowModal] = useState(false);
//   const ab = useNavigate();
//   const { value, setvalue } = useContext(MyContext);

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   const handleInputChange = (event) => {
//     event.preventDefault();
//     const fname = event.target.firstName.value;
//     console.log(fname);
//     const lname = event.target.lastName.value;
//     console.log(lname);
//     const Emailname = event.target.email.value;
//     console.log(Emailname);
//     const password1 = event.target.password.value;
//     console.log(password1);
//     const Password2 = event.target.confirmPassword.value;
//     console.log(Password2);
//     setvalue([
//       ...value,
//       { id: Math.random(), Fname: fname, Lname: lname, emailname: Emailname, pass1: password1, pass2: Password2 }
//     ]);
//     ab('/login');
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Register
//       </Button>

//       <Modal show={showModal} onHide={handleClose} className="login-modal">
//         <div className="lgm">
//           <Modal.Header closeButton>
//             <Modal.Title>Registration</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form className="form" onSubmit={handleInputChange}>
//               <div className="form-body">
//                 <div className="username">
//                   <Form.Label className="form__label" htmlFor="firstName">
//                     First Name
//                   </Form.Label>
//                   <Form.Control type="text" id="firstName" placeholder="First Name" />
//                 </div>
//                 <div className="lastname">
//                   <Form.Label className="form__label" htmlFor="lastName">
//                     Last Name
//                   </Form.Label>
//                   <Form.Control type="text" id="lastName" className="mb-3" placeholder="Last Name" />
//                 </div>
//                 <div className="email">
//                   <Form.Label className="form__label" htmlFor="email">
//                     Email
//                   </Form.Label>
//                   <Form.Control type="email" id="email" required className="mb-3" placeholder="Email" />
//                 </div>
//                 <div className="password">
//                   <Form.Label className="form__label" htmlFor="password">
//                     Password
//                   </Form.Label>
//                   <Form.Control type="password" id="password" className="mb-3" placeholder="Password" />
//                 </div>
//                 <div className="confirm-password">
//                   <Form.Label className="form__label" htmlFor="confirmPassword">
//                     Confirm Password
//                   </Form.Label>
//                   <Form.Control type="password" id="confirmPassword" className="mb-3" placeholder="Confirm Password" />
//                 </div>
//               </div>
//               <div className="footer">
//                 <Button type="submit" variant="outline-primary">
//                   Register
//                 </Button>
//               </div>
//             </Form>
//           </Modal.Body>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default Registration;
