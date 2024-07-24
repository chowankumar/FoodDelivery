import React, { useState } from 'react'
import {assets} from "../assets/assets"
 

const Navbar = () => {

    const [menu,setMenu] = useState("home");
  return (
    <div className='flex items-center justify-between p-6 w-[100%] lg:w-[80%] m-auto'>
        <img src={assets.logo} alt="" className='w-[150px]' />

        <ul className='hidden lg:flex gap-5 font-[400] text-[17px]'>
            <li className={`${menu==="home"?"active":""} cursor-pointer`} onClick={()=>setMenu("home")}>home</li>
            <li className={`${menu==="menu"?"active":""} cursor-pointer`} onClick={()=>setMenu("menu")}>menu</li>
            <li className={`${menu==="mobile-app"?"active":""} cursor-pointer`} onClick={()=>setMenu("mobile-app")}>mobile-app</li>
            <li className={`${menu==="contact-us"?"active":""} cursor-pointer`}  onClick={()=>setMenu("contact-us")}>contact us</li>
        </ul>

        <div className='flex gap-7 items-center'>
            <img src={assets.search_icon} alt=""  className='w-[27px] h-[27px]' />
            <div className='relative'>
            <img src={assets.basket_icon} alt="" className='w-[27px] h-[27px]' />
            <div className='absolute bg-[#ff6347] h-[10px] w-[10px] rounded-[5px] top-[-12px] right-0'></div>

            </div>
       
            <button className='border border-[#ff6347] px-7 py-2 rounded-full bg-transparent hover:bg-[#fff4f2]'> Sign in</button>
        </div>
    </div>
  )
}

export default Navbar