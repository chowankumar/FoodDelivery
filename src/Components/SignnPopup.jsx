import React, { useState } from 'react'
import { assets } from '../assets/assets'

const SignnPopup = ({ setShowLogin }) => {
    const [status, setStatus] = useState("Sign Up")
    return (
        <div className=' grid absolute z-10 bg-[#00000090] w-full h-[100%]'>

            <div className='bg-white w-[50%] h-[60%] rounded-[10px] self-center m-auto p-4 flex flex-col gap-6'>

                <div className='flex  justify-between'>
                    <h1 className='text-[25px] font-[700]'>{status}</h1>
                    <div><img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} className='h-4' /></div>
                </div>

                <form action="" className='flex flex-col gap-6'>

                    {
                        status === "Login" ? <></> : <input type="text" placeholder='Your name' required className='border border-gray p-2 rounded-[5px] text-gray-500' />
                    }
                    <input type="email" placeholder='email' required className='border border-gray p-2 rounded-[5px] text-gray-500' />
                    <input type="password" placeholder='Password' required className='border border-gray p-2 rounded-[5px] text-gray-500' />

                    <button className='border p-2 bg-orange-600 
                    rounded-[5px] text-white'>

                        {status==="Login"?"Login":"Create new account"
                         
                        }</button>
                </form>

                <p>
                    <input type="checkbox" name="" id="" />
                    by continuing i agree to the terms of use & privacy policy </p>

                {
                    status === "Login" ? <p >Create a new account<span className='text-orange-600' onClick={() => setStatus("Sign Up")}>Click Here</span></p> : <p >Already have an account<span className='text-orange-600' onClick={() => setStatus("Login")}>Log in</span></p>
                }




            </div>

        </div>
    )
}

export default SignnPopup