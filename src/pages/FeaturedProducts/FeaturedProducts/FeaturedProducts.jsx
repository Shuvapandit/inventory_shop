import React from 'react'

const FeaturedProducts = ({
    feturedproduct}) => {
    const{name,image,unit,price}=feturedproduct;
    return (
      <div className="">
      
      <div className="card card-compact w-60 bg-base-100 shadow-xl">
    <figure><img src={image} className='h-52' alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className=" text-base font-semibold">{name}</h2>
      {/* <p>{description}</p> */}
      <p className='font-bold'>Price:৳ {price}</p>
      <p className='font-bold'>{unit}</p>
      
      <div className="card-actions justify-end">
      {/* <button className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 border rounded absolute inset-x-0 bottom-0 h-12">Buy Now</button>  */}
      {/*  <button className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 border rounded absolute inset-x-0 bottom-0 h-12">
    ADD TO CART
</button> */}
      </div>
    </div>
  </div>
  
      
  </div>
    )
  }
  

export default FeaturedProducts