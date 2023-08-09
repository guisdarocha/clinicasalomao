// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import um from '../assets/mockupUm.jpeg'
import dois from '../assets/mockupDois.jpeg'
import tres from '../assets/mockupTres.jpeg'
import quatro from '../assets/mockupQuatro.jpeg'
import cinco from '../assets/mockupCinco.jpeg'
import seis from '../assets/mockupSeis.jpeg'
import sete from '../assets/mockupSete.jpeg'
import oito from '../assets/mockupOito.jpeg'
import nove from '../assets/mockupNove.jpeg'
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

const CelularUm = () => {
  return (
    <>
    <Swiper 
    navigation={false} 
    modules={[Navigation]} 
    className="mySwiper absolute right-[2rem] top-[471.9rem] w-[133px] h-[270px] rounded-xl sm:right-[10.8rem] sm:top-[472rem]  md:right-[14.8rem] md:top-[472rem] lg:right-[22.8rem] lg:top-[472rem] xl:right-[30.8rem] xl:top-[463rem]  2xl:right-[38.8rem] 2xl:top-[462.9rem]"
    allowSlidePrev={true}>
      <SwiperSlide><img src={um} alt="" /></SwiperSlide>
      <SwiperSlide><img src={dois} alt="" /></SwiperSlide>
      <SwiperSlide><img src={tres} alt="" /></SwiperSlide>
      <SwiperSlide><img src={quatro} alt="" /></SwiperSlide>
      <SwiperSlide><img src={cinco} alt="" /></SwiperSlide>
      <SwiperSlide><img src={seis} alt="" /></SwiperSlide>
      <SwiperSlide><img src={sete} alt="" /></SwiperSlide>
      <SwiperSlide><img src={oito} alt="" /></SwiperSlide>
      <SwiperSlide><img src={nove} alt="" /></SwiperSlide>
    </Swiper>
  </>
  );
};

export default CelularUm