import React from 'react'
import DarkVariantExample from './Components/slider/slider'
import Navbarmain from './Components/Navbar'
import Footer from './Components/Footer'
import Card from './Components/Product/Card'
import OfferCard from './Card/Offercard'
import Flatoff from './Card/Flatoff'
import FoodCard from './Card/FoodCard'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <header className=' sticky-top'><Navbarmain/>
       </header>
       <div>
       <DarkVariantExample/>
       </div>
    
      <div>{<OfferCard/>}</div> 
    
      
       <div>{<Flatoff/>}</div> 
       <div class="card mb-3 mx-auto d-flex align-items-center justify-content-center">
  <div class="card mb-3 ">
    <div class="col-md-8 m-auto">
      <div class="card-body">
        <h3 class="card-title">Shop Our Hands Free, Comfortable Baby Carriers</h3>
        <p class="card-text">100% natural baby-safe fabric
          Crossable padded shoulder straps and sturdy padded waistband
          Perfect fit at every stage with inch by inch adjustable base and height
          Crossable padded shoulder straps and sturdy padded waistband
          Easy to wash and maintain</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://m.media-amazon.com/images/I/918HC2mtaWL._SX679_.jpg" class="card-img" alt="Photos"/>
      </div>
      <div class="col-md-4">
        <img src="https://m.media-amazon.com/images/I/61cyXq3UKSL._SX679_.jpg" class="card-img" alt="Photos"/>
      </div>
      <div class="col-md-4">
        <img src="https://m.media-amazon.com/images/I/91W3KQjXnUL._SX679_.jpg" class="card-img" alt="Photos"/>
      </div>
    </div>
  </div>
</div>
<div >
        <Card/>
        </div>
<div>{<FoodCard/>}</div>
<div ><Outlet/></div>    
       
        
        
       <footer><Footer/></footer>
    </div>
  )
}

export default Home