import React, { useContext } from 'react';
import { MyContext } from '../../Context/Context';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

const AddProduct = () => {
  const {products,setproducts}=useContext(MyContext)
 const handleInputChange = (product) => {
    product.preventDefault();
    const productname = product.target.name.value;
    console.log(productname)
    const producttype = product.target.type.value
    console.log(producttype);
    const productimage = product.target.src.value;
    const productprice1 = product.target.price.value;
    const productprice2 = product.target.price2.value;
    const productdescription = product.target.description.value;
  setproducts([...products,{id: Date.now(), name:productname ,src:productimage,type:producttype ,price:productprice1,price2:productprice2,Discription:productdescription}])


  console.log(products);
 }  
  return (
    <>
    
    
    <div className="container" >
      <h1>Add Product</h1>
      <form onSubmit={handleInputChange}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name"  required />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="src" className="form-label">Category:</label>
          <input type="text" className="form-control" id="type"  required />
        </div> */}
        
        <Form.Select id="type" title="Category" aria-label="Default select example">
      
      <option>Open this select Category</option>
      <option value="toy">Toys</option>
      <option value="food">Food</option>
      <option value="clothes">Clothes</option>
      <option value="other">Others</option>
    </Form.Select>
    <br></br>


    
        <div className="mb-3">
          <label htmlFor="src" className="form-label">Image:</label>
          <input type="text" className="form-control" id="src"  required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="text" className="form-control" id="price"   required />
        </div>
        <div className="mb-3">
          <label htmlFor="price2" className="form-label">Price 2:</label>
          <input type="text" className="form-control" id="price2"   required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description"   required />
        </div>
        <button  className="btn btn-primary">Add Product</button>
      </form>
    </div>
    </>
  );
};

export default AddProduct;
