import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { googlelogin, loginuser } from '../../services/action/signup.action';
import GoogleButton from 'react-google-button'

const Login = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  const handlegoogle = () =>{
 
      dispatch(googlelogin())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email && login.password) {
      dispatch(loginuser(login.email, login.password));
    }
  };

    if (isLogin) {
      
      return(
        navigate('/')
       
      )
    }
    else{
      return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
          </Form.Group>
    
          <Button variant="primary" type="submit">
            Login
          </Button>
          <button onClick={handlegoogle}>foogle</button>
        </Form>
      );
    
    }


 };

export default Login;
