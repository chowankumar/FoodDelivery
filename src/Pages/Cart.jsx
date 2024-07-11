import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'


const Cart = () => {
  
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext)
  return (
    <div className='mt-[100px] w-[100%]'>
      <div className='grid grid-cols-custom-grid text-gray-500 font-[500]'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='mt-4 mb-4' />
      {
        food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='grid grid-cols-custom-grid items-center text-black text-[17px] font-[500]'>

                  <img src={item.image} alt="" className='w-15 
                  md:w-20' />
                  <p className='ml-2'>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{cartItems[item._id] * item.price}</p>

                  <p className='cursor-pointer' onClick={() => removeFromCart(item._id)}>x</p>


                </div>
                <hr className='mb-2 mt-2' />
              </div>

            )
          }
        })
      }



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
              getTotalCartAmount()>0?<p>${getTotalCartAmount() + 2}</p>:<p>${getTotalCartAmount()}</p>
            }
           
          </div>


          <button  className=' bg-orange-600 py-3 px-10 mt-4 text-white text-[15px] font-[500] rounded-[5px] w-fit'>PROCEED TO CHECKPUT</button>

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
  )
}

export default Cart