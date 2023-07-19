import React, { useContext } from 'react'
import {  Button, Table } from 'react-bootstrap';
import { MyContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const Adminviewproduct = () => {
  const ab=useNavigate()
    const {products,setproducts}=useContext(MyContext)
  
    // const deleteProduct =(e)=>{
    //     const index=e.target.id
    //     const remove=[...products]
    //     remove.splice(index,1)
    //     setproducts(remove)
    // }
    

    return (
    <div>          <h2>View Products</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>curent Price</th>
          <th></th>
          <th>Edit product</th>
          <th>Delete product</th>
        </tr>
      </thead>
      <tbody>
        {products.map((products,i) => (
          <tr key={products.id}>
            <td>{products.id}</td>
            <td><img src= {products.src} alt='Photos' width={50}/></td>
            <td>{products.name}</td>
            <td>{products.price}</td>
            <td>{products.price2}</td>
            <td>{products.Discription}</td>
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

export default Adminviewproduct