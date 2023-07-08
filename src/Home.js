import React from 'react'
import DarkVariantExample from './Components/slider/slider'
import Navbarmain from './Components/Navbar'
import Footer from './Components/Footer'
import Card from './Components/Product/Card'

const Home = () => {
  return (
    <div>
       <header><Navbarmain/>
       </header>
       <div >
       <DarkVariantExample/>
       </div>
       <div><br></br></div>
       <div>
        <Card/>
        </div>
       <footer><Footer/></footer>
    </div>
  )
}

export default Home