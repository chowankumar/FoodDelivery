import React from 'react'
import { assets } from '../assets/assets'

const DownloadApp = () => {
  return (
    <div className='flex flex-col gap-4 mt-20 items-center w-[60%] m-auto text-center mb-24'>
        <h1 className='text-[50px] font-[500]'>For Better Experience Download Tomata App</h1>
        <div className='flex gap-4'> 
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default DownloadApp