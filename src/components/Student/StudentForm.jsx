import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addadmin } from '../../services/action/student.action';
import { Container, Form, Row, Button } from 'react-bootstrap';

const StudentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    name: '',
    email: '',
    pass: '',
    number: '',
  });
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const  handleSubmit  = async (e) => {
    e.preventDefault();

    await dispatch(addadmin(data));

    setdata({
      name: '',
      email: '',
      pass: '',
      number: '',
    });

    navigate('/StudentView');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <div className="form">
          <div className="col-9 detail">
            <Form className="pt-3" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group controlId="formGridFirstName">
                  <Form.Label className="mb-0">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter The First Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGridNumber">
                  <Form.Label className="mb-0">Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    name="number"
                    value={data.number}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="mb-0">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                  <Form.Label className="mb-0">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Your Password"
                    name="pass"
                    value={data.pass}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Add Admin
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default StudentForm;
