
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import  './slider.module.css'
import img1 from '../../../assets/images/slidersimg/img1.jpg'
import img2 from '../../../assets/images/slidersimg/img2.jpg'
import img3 from '../../../assets/images/slidersimg/img3.jpg'
import img4 from '../../../assets/images/slidersimg/img4.jpg'
import img5 from '../../../assets/images/slidersimg/img5.jpg'
import img6 from '../../../assets/images/slidersimg/img6.jpg'
const Slider = () => { 
  return (
    <>
    
 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} style={{ width: '100%', height: '400px' }} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img2} style={{ width: '100%', height: '400px' }} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img3} style={{ width: '100%', height: '400px' }} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img4} style={{ width: '100%', height: '400px' }} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img5} style={{ width: '100%', height: '400px' }} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img6} style={{ width: '100%', height: '400px' }} alt="Slide 1" /></SwiperSlide>
        
      </Swiper>
   
      
    </>
  )
}

export default Slider