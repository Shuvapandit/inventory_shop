import React from 'react'
import Slider from '../Shared/Slider/Slider'
import FeaturedDisplayProducts from '../FeaturedProducts/FeaturedDipalyProducts/FeaturedDisplayProducts'
/* import Shopiteams from '../Shopiteams/Shopiteams' */
const Home = () => {
  return (
    <div className=''>
      <div className=" ml-[-20px]">
      <Slider/> 
      </div>
   
   <FeaturedDisplayProducts/>
   
    </div>
  )
}

export default Home