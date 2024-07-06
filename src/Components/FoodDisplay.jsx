import React, { useContext } from 'react'
import { StoreContext } from "./../context/StoreContext"
import FoodItems from './FoodItems'


const FoodDisplay = () => {
    const { food_list } = useContext(StoreContext)
    return (
        <div>
            <h1 className=' text-[35px] font-[600] mb-4'>Top dishes near you</h1>
            <div className='grid grid-cols-4 gap-4'>


                {
                    food_list.map((item, index) => {
                        return (
                            <FoodItems key={index} id={item._id} name={item.name} image={item.image}
                                price={item.price} desc={item.description} category={item.category} />
                        )
                    })

                }

            </div>
        </div>

    )
}

export default FoodDisplay