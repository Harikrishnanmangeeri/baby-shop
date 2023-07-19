import React, { useContext } from 'react'
import { Table } from 'react-bootstrap';
import { MyContext } from '../../Context/Context';

const Adminviewusers = () => {
    const {value}=useContext(MyContext)
  console.log(value);
  return (
    <div> <h2>View Users</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {value.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.Fname}</td>
            <td>{user.emailname}</td>
          </tr>
        ))}
      </tbody>
    </Table></div>
  )
}

export default Adminviewusers