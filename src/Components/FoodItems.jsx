import React from 'react'
import { assets } from '../assets/assets'

const FoodItems = ({ id, name, price, image, desc, category }) => {
  return (

    <div className='rounded-[10px] bg-white shadow-md '>

      <img src={image} alt="" className='rounded-tl-[15px] rounded-tr-[15px] max-h-[300px]' />
      <div className='p-4 flex flex-col gap-2 '>
        <div className='item-name flex justify-between mb-5 items-center'>
          <p className='text-[20px] font-[500]'>{name}</p>
          <img src={assets.rating_starts} alt="" className='w-[90px] h-[17px] cursor-pointer' />

        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[15px] font-[400]'>{desc}</p>
          <h2 className='text-red-400 font-[700] text-[25px] '>${price}</h2>
        </div>
      </div>

    </div>



  )
}

export default FoodItems