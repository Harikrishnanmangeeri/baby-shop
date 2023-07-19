import React, { useContext } from 'react'
import { MyContext } from '../../Context/Context';
import {  Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminCloths = () => {
  const ab=useNavigate()
    const { products ,setproducts} = useContext(MyContext);
  const filteredProducts = products.filter(
    (p) => p.type.toLowerCase() === 'clothes'
  );
  return (
    <div>          <h2>Product Category clothes</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>curent Price</th>
          <th>Edit product</th>
          <th>Delete product</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((products,i) => (
          <tr key={products.id}>
            <td>{products.id}</td>
            <td><img   src= {products.src} alt='photos' width={50}/></td>
            <td>{products.name}</td>
            <td>{products.price}</td>
            <td>{products.price2}</td>
            <td>
        <Button variant="primary" onClick={()=>ab(`/editproduct/${products.id}`)}>Edit</Button>
      </td>
      <td>
        <Button variant="danger" id={i} onClick={()=>setproducts(p=>p.filter((a)=>a.id!==products.id))}>Delete</Button>
      </td>
          </tr>
        ))}
      </tbody>
    </Table></div>
  )
}

export default AdminCloths