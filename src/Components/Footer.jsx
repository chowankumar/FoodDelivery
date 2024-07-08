import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white ' id='footer'>

            <div className='flex-row p-10 md:flex md:p-20 md:gap-8'>

                <div className="footer-left w-[100%] flex flex-col items-start gap-2 md:w-[40%]">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla provident dolorum minus excepturi, debitis cum odit veniam dolor accusantium quo laboriosam, eos perferendis. Cumque dolor magni nisi ad laudantium minus nemo praesentium temporibus debitis natus voluptates quos asperiores aperiam soluta distinctio id dolorum, voluptatem officiis numquam blanditiis! Quaerat, quae.</p>
                </div>

                <div className="footer-middle w-[100%] flex flex-col items-start text-center mt-4 md:w-[30%]">
                    <h1 className='font-[500] text-[30px]'>Company</h1>
                    <div className='flex flex-col items-start'>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Delivery</p>
                        <p>Privacy Policy</p>
                    </div>

                </div>

                <div className="footer-right w-[100%] flex flex-col items-start mt-4 md:w-[30%]">
                    <h1 className='font-[500] text-[30px]'>GET IN TOUCH</h1>
                    <div>
                        <p>03499435773</p>
                        <p>chowanmalhani5@gmail.com</p>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Footer