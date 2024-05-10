// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import image
import bnrImg1 from '../assets/bnr1.jpg'
import bnrImg2 from '../assets/bnr2.jpg'
import bnrImg3 from '../assets/bnr3.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop = {true}
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
        <SwiperSlide>
          <Slide image={bnrImg1} text='Research your restaurant niche'/>
        </SwiperSlide>
       
        <SwiperSlide>
          <Slide image={bnrImg2} text='Focus on customer satisfaction'/>
        </SwiperSlide>
       
        <SwiperSlide>
          <Slide image={bnrImg3} text='Design a profitable menu'/>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
