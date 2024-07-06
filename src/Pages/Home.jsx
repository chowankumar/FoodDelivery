import React, { useState } from 'react'
import Header from '../Components/Header'
import ExploreMenu from '../Components/ExploreMenu'
import FoodDisplay from '../Components/FoodDisplay'
import DownloadApp from '../Components/DownloadApp'

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <DownloadApp/>
    </div>
  )
}

export default Home