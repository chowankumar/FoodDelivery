import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import PlaceOrder from './Pages/PlaceOrder'
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import { useState } from 'react'
import SignnPopup from './Components/SignnPopup'

function App() {
  const [showLogin,setShowLogin] = useState(false);
  
  return (
    <>
    {
      showLogin?<SignnPopup setShowLogin={setShowLogin}/>:<></>
    }

    <div className='w-[80%] m-auto'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
    </Routes>
    </div>

    <Footer/>
  
    </>
  
    
  )
}

export default App
