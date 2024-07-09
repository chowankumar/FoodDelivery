import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext)
  return (
    <div className='mt-[100px]'>
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

                  <p className='cursor-pointer' onClick={()=>removeFromCart(item._id) }>x</p>


                </div>
                <hr className='mb-2 mt-2'/>
              </div>

            )
          }
        })
      }



       <div className='mt-24 grid grid-rows-2 gap-40'>
        <div className='w-[40%]'>
          <h1 className='font-[700] text-[25px] mb-4'>Cart Totals</h1>

          <div className='flex justify-between font-[400] text-[18px] text-gray-500'>
            <p>Subtotal</p>
            <p>{0}</p>
          </div>
          <hr className='h-2 bg-gray mt-2 mb-2'/>

          <div className='flex justify-between font-[400] text-[18px] text-gray-500'>
            <p>Subtotal</p>
            <p>{2}</p>
          </div>
          <hr className='h-2 bg-gray mt-2 mb-2'/>

          <div className='flex justify-between font-[700] text-[18px] text-gray-800'>
            <p>Total</p>
            <p>{0}</p>
          </div>
           

          <button className='bg-orange-600 py-3 px-10 mt-4 text-white text-[15px] font-[500] rounded-[5px]'>PROCEED TO CHECKPUT</button>

        </div>
        <div className='w-[50%] flex flex-col items-start justify-center gap-2 '>
          <p className='text-[16px] font-[500] text-gray-600'>If you have a promo code. Enter it here</p>
          <div>
            
          <input type="text"  placeholder="promocode" className='border bg-gray-300 w-[400px] py-[7px] p-4'/>
          <button className='bg-black text-white p-[7px] w-[150px] '>Submit</button>


          </div>
        </div>
       </div>
    </div>
  )
}

export default Cart