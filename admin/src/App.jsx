 import React from 'react'
 import Navbar from './components/Navbar/Navbar'
 import Sidebar from './components/Sidebar/Sidebar'
 import {Routes,Route} from 'react-router-dom'
 import Add from './pages/Add/Add' 
 import List from './pages/List/List.jsx'
 import Order from './pages/Orders/Order.jsx'

 import {ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css'
 const App = () => {
   return (
     <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/Order' element={<Order/>}/>
        </Routes>
      </div>
     </div>
   )
 }
 
 export default App