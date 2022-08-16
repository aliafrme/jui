import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './App.css';


function Login() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Login">
<Navbar className="Navbar" style={{ backgroundColor: '#4B4B4B' , }}>
        <Container>
         
          <Nav className="me-auto">
            <Link to="/"  style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>Home</Link>
            <Link to="/Login"  style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>Sign up</Link>
            <Link to="/Login" style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>Log in</Link>
          </Nav>
        </Container>
  </Navbar>


  

     <br />
     
     <div className="login-form">
          <br />
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <br />
     <center>
  <Button variant="success">submit</Button>{' '}

     </center> 
       <br />
     </div>


     </div>
  );
}
export default Login;