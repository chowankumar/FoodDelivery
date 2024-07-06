import React, { useContext} from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext';

const FoodItems = ({ id, name, price, image, desc,}) => {

  const {cartItems,removeFromCart,addToCart} = useContext(StoreContext);
  return (

    <div className='rounded-[10px] bg-white shadow-md relative'>

      <img src={image} alt="" className='rounded-tl-[15px] rounded-tr-[15px] max-h-[300px]' />
      {
       !cartItems[id]? <img src={assets.add_icon_white} alt=""  onClick={()=>addToCart(id)} className='absolute bg-white top-[198px] 
       right-[20px] rounded-full h-10'/>
      :<div className='flex items-center gap-2 absolute top-[198px] right-[20px] bg-white px-2 py-2 rounded-full'>
         <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
           <p className='font-[600]'>{cartItems[id]}</p>
           <img  onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
         </div>
      }
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