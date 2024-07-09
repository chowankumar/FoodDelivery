import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] pt-[80px] mt-[100px] p-20' id='footer'>
        <div className="w-[100%] grid  lg:grid-cols-custom-grid2 gap-[80px]">
            <div className="flex flex-col items-start gap-[20px]">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, maxime suscipit! Sit, soluta. Inventore ab officiis doloremque harum suscipit quibusdam.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""  className='w-[40px] mr-[15px]'/>
                    <img src={assets.twitter_icon} alt=""  className='w-[40px] mr-[15px]'/>
                    <img src={assets.linkedin_icon} alt="" className='w-[40px] mr-[15px]' />
                </div>

            </div>
            
     <div className="flex flex-col items-start gap-[20px]">
        <h2  className='text-white'>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>

      </div>
    <div className="flex flex-col items-start gap-[20px]">
        <h2 className='text-white'>GET IN TOUCH</h2>
        <ul>
            <li>03499435773</li>
            <li>chowanmalhani5@gmail.com</li>
        </ul>
    </div>
        </div>
        <hr className='w-[100%] h-[2px] m-[20px_0] bg-gray-500 border-none' />
        <p className="footer-copyright">
            Copyright 2024 Tomatato.com - All Right Reserved
        </p>

    </div>
    )
}

export default Footer