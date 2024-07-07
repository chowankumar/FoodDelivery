import React from 'react'
const Header = () => {
  return (
    <div className='header bg-custom-header bg-no-repeat bg-contain h-[34vw]  relative m-auto my-7.5 mx-auto'>
    <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
        <h2 className='hidden 2xl:block font-[500] text-white text-[75px]'>Order your favourite food here</h2>
        <p className='text-white text-[13px] lg:text-[20px]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the satisfy your dinning experience, one delicious meal at a time.</p>
        <button className='border-none text-[#747474] font-[500] px-6 py-4 bg-white 
        text-[17px] rounded-[50px] '>View Menu</button>
    </div>
</div>
  )
}

export default Header