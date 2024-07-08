import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext)
  return (
    <div className='h-96 mt-[100px]'>
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

                  <img src={item.image} alt="" className='w-20' />
                  <p>{item.name}</p>
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

    </div>
  )
}

export default Cart