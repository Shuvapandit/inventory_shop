import { useEffect, useState } from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
const FeaturedDisplayProducts = () => {
  const [Feturedproducts, setFeturedproducts] = useState([]);
  useEffect(() => {
    fetch("inventoryiteams.json")
      .then((response) => response.json())
      .then((data) => setFeturedproducts(data.slice(0, 15)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="">
      <h1 className="text-lg mt-3 mb-2 font-semibold lg:text-left sm:text-center ">
        Featured Products
      </h1>
      <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 gap-y-3 gap-x-2 ">
        {Feturedproducts.map((feturedproduct) => (
          <FeaturedProducts
            key={feturedproduct._id}
            feturedproduct={feturedproduct}
          ></FeaturedProducts>
        ))}
      </div>
    </div>
  );
};
export default FeaturedDisplayProducts;
