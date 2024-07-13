import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate();
  return (

    <div className='flex'>
      <div className="flex-1">
        <h1 className='text-[30px] font-[500]'>Delivery Information</h1>

        <form action="" className=''>
          <div>
          <input type="text" placeholder='first name' className='border  bg-white outline-none pl-3 py-1 rounded-[5px]'/>
          <input type="text" placeholder='last name' />
          </div>
          <input type="text" placeholder='email address' />
          <input type="text" placeholder='street' />
          <div>
          <input type="text" placeholder='city'/>
          <input type="text" placeholder='state' />
          </div>
          <div>
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />


        </form>
      </div>
      <div className="flex-1">
        <div className='mt-[100px] flex flex-col justify-between  md:flex-row gap-8'>

          <div className='flex-1 flex flex-col gap-[20px]'>
            <h1 className='font-[700] text-[25px]'>Cart Totals</h1>

            <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='bg-gray mt-2' />

            <div className='flex justify-between'>
              <p>Fees</p>
              <p>${2}</p>
            </div>
            <hr className='mt-2' />

            <div className='flex justify-between'>
              <p>Total</p>
              {
                getTotalCartAmount() > 0 ? <p>${getTotalCartAmount() + 2}</p> : <p>${getTotalCartAmount()}</p>
              }

            </div>


            <button className='bg-orange-600 py-3 px-10 mt-4 text-white text-[15px] font-[500] rounded-[5px] w-fit'>PROCEED TO PAYMENT</button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default PlaceOrder