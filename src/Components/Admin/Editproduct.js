import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../Context/Context';
const Editproduct = () => {
  const { products, setproducts } = useContext(MyContext);

  const { id } = useParams();
  const eid = id;
  // console.log(id)
  const filteredit = products.filter((item) => parseFloat(item.id) === parseFloat(eid));
// console.log(filteredit);

  
  const handleSubmit =(e)=>{
    e.preventDefault()
// const id=e.target.id
// console.log(id)


    const updatedProducts = products.map((product) => {
      const newName = e.target.name.value || product.name;
      const newBrand = e.target.src.value || product.src;
      const newType = e.target.type.value || product.type;
      const newPrize = e.target.price.value || product.price;
      const newOfferpize = e.target.price2.value || product.price2;
      const newDescription = e.target.description.value || product.Discription;
      if (product.id === parseInt(eid)) {
       
        return {
          ...product,
          name: newName,
          src: newBrand,
          type: newType,
          price: newPrize,
          price2: newOfferpize,
          Discription: newDescription,
        };
        
        
      } 
      else {
        return product;
      }
    });

    setproducts(updatedProducts);
   
    
  };

  return (
    <>
      <div className="container">
        <h1>Edit Product</h1>
       
        {filteredit.map((product) => (
          <div className=' d-flex' >
          <div className='half-screen-div'>
              <div className=''>
              <img
      src={product.src}
      alt="Photos"
      style={{ width: '200px', height: '150px' }} 
    />              </div>
              <div>
                <h1>{product.name}</h1>
                <h2>{product.type}</h2>
                <h2>{product.price}</h2>
                <h2>{product.price2}</h2>
                <h2>{product.Discription}</h2>
              </div>
             </div>
              <div key={product.id}>
              <form  id={product.id} onSubmit={handleSubmit} style={{ width: '100vh' }}>
              <div className="mb-3" >
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input type="text" className="form-control" id="name" />
              </div>

              <Form.Select id="type" title="Category" aria-label="Default select example">
                <option>Open this select Category</option>
                <option value="toy">Toys</option>
                <option value="food">Food</option>
                <option value="clothes">Clothes</option>
                <option value="other">Others</option>
              </Form.Select>
              <br />

              <div className="mb-3">
                <label htmlFor="src" className="form-label">
                  Image:
                </label>
                <input type="text" className="form-control" id="src"  />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input type="text" className="form-control" id="price"  />
              </div>
              <div className="mb-3">
                <label htmlFor="price2" className="form-label">
                  Price 2:
                </label>
                <input type="text" className="form-control" id="price2"  />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <textarea className="form-control" id="description"  />
              </div>
              <button className="btn btn-primary" type='submit'>Update</button>
            </form>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Editproduct;
