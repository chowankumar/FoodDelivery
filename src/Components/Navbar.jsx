import React, { useCallback, useState } from 'react'
import { assets } from '../assets/assets'
import "../GerenalCss.css"

const Navbar = () => {
    const [menu, setMenu] = useState("")
    return (

        <div className='p-8 flex flex-col gap-2 lg:flex-row  justify-between items-center w-[80%] m-auto '>

            <div className="left-nav">
                <img src={assets.logo} alt="" />
            </div>
            <div className="middle-nav flex  list-none gap-6 font-semibold text-[19px]">

                <li onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""} cursor-pointer`}>home</li>
                <li onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""} cursor-pointer`}>menu</li>
                <li onClick={() => setMenu("mobile-app")} className={`${menu === "mobile-app" ? "active" : ""} cursor-pointer`}>mobile-app</li>
                <li onClick={() => setMenu("contact-us")} className={`${menu === "contact-us" ? "active" : ""} cursor-pointer`}>contact us</li>



            </div>
            <div className="right-nav flex items-center justify-between gap-16 lg:gap-8">
                <div className="search">
                    <img src={assets.search_icon} alt="" />
                </div>
                <div className="basket relative">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot absolute min-w-[10px] min-h-[10px] bg-red-500 rounded-[5px]
                     top-[-8px] right-[-8px]"></div>
                </div>
                <div className="signin-button">
                    <button className=' border border-gray-400 px-6 py-2 rounded-full hover:bg-[#fff4f2]'>sign in</button>
                </div>
            </div>


        </div>
    )
}

export default Navbar