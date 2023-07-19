import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes} from 'react-router-dom'
import {MyContext} from './Context/Context';
import { useState } from 'react';
import Registration from './Components/Log&reg/Registration';
import Home from './Home';
import Login from './Components/Log&reg/Login';
// import Displayproduct from './Components/Product/Displayproduct';
import {product} from './Components/Product/Products'
import Clothes from './Components/Product/Clothes';
import Food from './Components/Product/Food';
import Toys from './Components/Product/Toys';
import Others from './Components/Product/Others';
import ProductCard from './Components/Product/Card';
import ProductDetails from './Components/Product/ProductDisplay';
import Search from './Components/search';
import PaymentMethods from './Components/Product/Cart';
import Delivery from './Components/Product/Payment';
import AdminPage from './Components/Admin/Admin';
import Adminviewproduct from './Components/Admin/Adminviewproduct';
import Adminviewusers from './Components/Admin/Adminviewusers';
import AdminFood from './Components/Admin/AdminFood';
import AdminToys from './Components/Admin/AdminToys';
import AdminOthers from './Components/Admin/AdminOthers';
import AdminCloths from './Components/Admin/AdminCloths';
import AddProduct from './Components/Admin/Addproduct';
import Editproduct from './Components/Admin/Editproduct';
import Allproduct from './Components/Product/Allproduct';


function App() {
  // window.onpopstate = () =>{Navigate}
const [value,setvalue]=useState([])
const [products,setproducts]=useState(product)
const [user,setuser]=useState(false)
const [addtocart,setaddtocart]=useState([])
const [totprice,settotprice]=useState(0)
const [username,setUsername]=useState([])
  return (
    <div className="App">
<MyContext.Provider value={{value,setvalue,product,addtocart,setaddtocart,totprice,settotprice,user,setuser,username,setUsername,products,setproducts}}>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Registration' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
  {/* <Route path='/displayProducts' element={<Displayproduct/>}/> */}
  <Route path='/Clothes' element={<Clothes/>}/>
  <Route path='/Food' element={<Food/>}/>
  <Route path='/Toys' element={<Toys/>}/>
  <Route path='/Others' element={<Others/>}/>
  <Route path='/productcard' element={<ProductCard/>}/>
  <Route path='/displayProduct/:id' element={<ProductDetails/>}/>
  <Route path='/Search/:id' element={<Search/>}/>
  <Route path='/cart' element={<PaymentMethods/>}/>
  <Route path='/Delivery/:price' element={<Delivery/>}/>
  <Route element={<Home/>}>
  <Route path='/Allproduct' element={<Allproduct/>}/>
  </Route>
  
  
  <Route path='/Admin' element={user===true?<AdminPage/>:<Login/>}/>
  
  <Route element={<AdminPage/>}>
  <Route path='/adminProduct' element={<Adminviewproduct/>}/>
 <Route path='/AdminUser' element={<Adminviewusers/>}/>
 <Route path='/AdminToys' element={<AdminToys/>}/>
 <Route path='/AdminFood' element={<AdminFood/>}/>
 <Route path='/AdminOthers' element={<AdminOthers/>}/>
 <Route path='/AdminClothes' element={<AdminCloths/>}/>
 <Route path='/pa' element={<AddProduct/>}/> 
 <Route path='/editproduct/:id' element={<Editproduct/>}/>
  </Route>
</Routes>
</MyContext.Provider>
    </div>
  );
}

export default App;
