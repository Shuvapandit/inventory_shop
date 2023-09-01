import img1 from "../../../assets/images/Popularbrandimgs/teer.png";
import img2 from "../../../assets/images/Popularbrandimgs/reckitt.webp";
import img3 from "../../../assets/images/Popularbrandimgs/nestle.webp";
import img4 from "../../../assets/images/Popularbrandimgs/uniliver.webp";
import img5 from "../../../assets/images/Popularbrandimgs/marico.webp";
import img6 from "../../../assets/images/Popularbrandimgs/coca-cola.webp";
import img7 from "../../../assets/images/Popularbrandimgs/fresh.webp";

const PopularBrands = () => {
  return (
    <div className="mb-12">
      <div>
        <p className="text-center font-medium text-2xl mb-3">Popular Brands</p>
      </div>
      <div className="grid grid-cols-7 gap-1 lg:ml-12 sm:ml-2 sm:mr-2 ">
        <div className="col-span-1">
          <img src={img1} className="w-16 h-auto " alt="Reckitt" />
        </div>

        <div className="col-span-1">
          <img src={img2} className="w-16 h-auto " alt="Reckitt" />
        </div>
        <div className="col-span-1">
          <img src={img3} className="w-16 h-auto " alt="Nestle" />
        </div>
        <div className="col-span-1">
          <img src={img4} className="w-16 h-auto " alt="Nestle" />
        </div>
        <div className="col-span-1">
          <img src={img5} className="w-16 h-auto " alt="Nestle" />
        </div>
        <div className="col-span-1">
          <img src={img6} className="w-16 h-auto " alt="Nestle" />
        </div>
        <div className="col-span-1">
          <img src={img7} className="w-16 h-auto " alt="Nestle" />
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
