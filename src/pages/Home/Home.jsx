import React from "react";
import Slider from "../Shared/Slider/Slider";
import FeaturedDisplayProducts from "../FeaturedProducts/FeaturedDipalyProducts/FeaturedDisplayProducts";
const Home = () => {
  return (
    <div className="">
      <div className=" lg:ml-[-20px]">
        <Slider />
      </div>
      <FeaturedDisplayProducts />
    </div>
  );
};

export default Home;
