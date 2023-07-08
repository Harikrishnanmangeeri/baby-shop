import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from 'react-router-dom'
import {MyContext} from './Context/Context';
import { useState } from 'react';
import Registration from './Components/Log&reg/Registration';
import Home from './Home';
import Login from './Components/Log&reg/Login';
function App() {
const [value,setvalue]=useState([])
  return (
    <div className="App">
<MyContext.Provider value={{value,setvalue}}>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Registration' element={<Registration/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
</MyContext.Provider>
    </div>
  );
}

export default App;
