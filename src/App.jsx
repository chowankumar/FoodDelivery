import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import PlaceOrder from './Pages/PlaceOrder'
import Cart from './Pages/Cart'

function App() {
  
  return (
    <>
    <div className='w-80% m-auto'>
    <Navbar/>
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
