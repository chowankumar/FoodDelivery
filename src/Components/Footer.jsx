import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex gap-40 p-20 bg-gray-800 text-white'>
            <div className="footer-left w-[50%] flex flex-col items-start gap-2">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla provident dolorum minus excepturi, debitis cum odit veniam dolor accusantium quo laboriosam, eos perferendis. Cumque dolor magni nisi ad laudantium minus nemo praesentium temporibus debitis natus voluptates quos asperiores aperiam soluta distinctio id dolorum, voluptatem officiis numquam blanditiis! Quaerat, quae.</p>
            </div>
            <div className="footer-middle w-[30%] flex flex-col items-start text-center gap-2">
                <h1 className='font-[500] text-[30px]'>Company</h1>
                <div className='flex flex-col items-start'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Delivery</p>
                    <p>Privacy Policy</p>
                </div>

            </div>
            <div className="footer-right w-[30%] flex flex-col items-start gap-2">
                <h1 className='font-[500] text-[30px]'>GET IN TOUCH</h1>
                <div>
                    <p>03499435773</p>
                    <p>chowanmalhani5@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer