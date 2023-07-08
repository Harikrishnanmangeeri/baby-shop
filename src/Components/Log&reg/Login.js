import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/Context';


function Login() {
    const {value}=useContext(MyContext)
    console.log(value);

    const ab=useNavigate()

    const handleInputChange = (event) => {
        event.preventDefault();
    const Emailname = event.target.emaillog.value;
    console.log(Emailname);
    const passwordlg = event.target.passwordlog.value;
    console.log(passwordlg);

    const values=value.filter((x)=>{
        return  x.emailname===Emailname
        
         })
         console.log(values);
         if(value[0].pass1===passwordlg)
         {
          ab("/")
         }
        else{
          alert("plz Register or plz check email & password")
        }
    };
  return (
    <Form onSubmit={handleInputChange}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" id="emaillog" required placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" id="passwordlog" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;