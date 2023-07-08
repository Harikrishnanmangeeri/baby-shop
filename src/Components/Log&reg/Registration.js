import React, { useContext } from 'react'
import{useNavigate} from 'react-router-dom'
import 'bootstrap'
import { MyContext } from '../../Context/Context'
const Registration = () => {
    const ab=useNavigate()

    const {value,setvalue}=useContext(MyContext)

    const handleInputChange = (event) => {
    event.preventDefault();
    const fname = event.target.firstName.value;
    console.log(fname);
    const lname = event.target.lastName.value;
    console.log(lname);
    const Emailname = event.target.email.value;
    console.log(Emailname);
    const password1 = event.target.password.value;
    console.log(password1);
    const Password2 = event.target.confirmPassword.value;
    console.log(Password2);
    setvalue([...value,{ id: Math.random(), Fname:fname ,Lname:lname,emailname:Emailname,pass1:password1,pass2:Password2}]);
    ab("/login");    
};
return (
    <form className="form" onSubmit={handleInputChange}>
          <div className="form-body">
              <div className="username">
                  <label className="form__label " for="firstName">First Name </label>
                  <input className="mb-3" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="mb-3"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" required className="mb-3" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="mb-3" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="mb-3" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button className="btn btn-outline-primary">Register</button>
          </div>
        
    </form>
  )
}

export default Registration