import React from "react";
import Slider from "../Shared/Slider/Slider";
import FeaturedDisplayProducts from "../FeaturedProducts/FeaturedDipalyProducts/FeaturedDisplayProducts";
import Faq from "./FAQ/Faq";
import PopularBrands from "./PopularBrands/PopularBrands";
const Home = () => {
  return (
    <div className="">
      <div className=" lg:ml-[-20px]">
        <Slider />
      </div>
      <FeaturedDisplayProducts />
      <PopularBrands />
      <div className=" justify-center">
        <Faq />
      </div>
    </div>
  );
};

export default Home;
