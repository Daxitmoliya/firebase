import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Table } from 'react-bootstrap';
import { deleteAdmin, fetchData, singleadd, updateAdmin } from '../../services/action/student.action';
import UpdateStudentForm from '../Updateform/Updateform';
import { useNavigate } from 'react-router';

const ViewPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { admins } = useSelector((state) => state.admin);

  const [update, setUpdate] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  

 useEffect(() => {
  dispatch(fetchData());
}, [dispatch]);



  const handleDelete = (adminId) => {
    dispatch(deleteAdmin(adminId));
  };

  const handleUpdate = (adminData) => {
    console.log("adminData:", adminData); 
    setSelectedAdmin(adminData);
    dispatch(singleadd(adminData.id));
    setUpdate(true);
    navigate("/updateform");
  };

  const handleUpdateSubmit = () =>{
    setUpdate(false);
    setSelectedAdmin(null);
    console.log("Selected Admin:", selectedAdmin);
    dispatch(fetchData());
  }

  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {admins.length > 0 ? (
            admins.map((adminData) => (
              <tr>
                <td>{adminData.id}</td>
                <td>{adminData.name}</td>
                <td>{adminData.email}</td>
                <td>{adminData.pass}</td>
                <td>{adminData.number}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(adminData.id)}>
                    Delete
                  </Button>
                  <Button variant="info" onClick={() => handleUpdate(adminData)}>
                    Update
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </Table>

      {update && selectedAdmin && (
        <UpdateStudentForm student={selectedAdmin} onUpdate={handleUpdateSubmit} />
      )}
    </Container>
  );
};

export default ViewPage;
