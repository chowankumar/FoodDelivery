import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import PlaceOrder from './Pages/PlaceOrder'
import Cart from './Pages/Cart'

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
    </Routes>
    </>
  )
}

export default App
