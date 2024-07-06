import React from 'react'
import {menu_list} from "./../assets/assets"
import './../GerenalCss.css'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='m-auto mt-8 mb-8'>
        <h1 className='text-[#262626] text-[45px] font-[500]'>Explore our menu</h1>
        <div className="menu-text w-[60%] font-[500]">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to Choose from a diverse menu featuring a delectable array of dishes. Our mission is to
        </div>

        <div className="no-scrollbar menu-images flex justify-between items-center gap-[30px] text-center m-[20px_0px] overflow-scroll ">
            {
                menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}  key={index} className='flex flex-col gap-2 items-center w-[80%]'> 
                            <img  className={`${category === item.menu_name?"activeMenu":""} w-[7.5vw] min-w-[80px] rounded-[50%] transition-[0.2s]`} src={item.menu_image} alt=""/>
                            <p className='mt-[10px] text-[20px] cursor-pointer text-[#747474]'>{item.menu_name}</p>
                        </div>
                    )

                })
            }
        </div>

        <hr className='h-1 bg-slate-300' />
    </div>
  )
}

export default ExploreMenu