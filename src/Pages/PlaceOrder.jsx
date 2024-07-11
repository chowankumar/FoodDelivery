import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  const navigate = useNavigate();
  return (

    <div>
      <div className="left">

        <form action="">

        </form>
      </div>
      <div className="right">
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




          <div className='flex-1'>
            <div>
              <p className='text-[16px] font-[500] text-gray-600'>If you have a promo code. Enter it here</p>
              <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
                <input type="text" placeholder="promocode" className='border-none outline-none bg-transparent pl-[15px]' />
                <button className='bg-black text-white py-[11px] w-[150px] rounded-[4px] '>Submit</button>


              </div>






            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder