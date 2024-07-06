import React from 'react'
const Header = () => {
  return (
    <div className='header bg-custom-header bg-no-repeat bg-contain h-[34vw] w-[80%] relative m-auto my-7.5 mx-auto'>
    <div className="header-contents  absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the satisfy your dinning experience, one delicious meal at a time.</p>
        <button>View Menu</button>
    </div>
</div>
  )
}

export default Header