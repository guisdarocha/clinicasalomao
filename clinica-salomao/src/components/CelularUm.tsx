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
    className="mySwiper absolute right-[2rem] top-[478.1rem] w-[133px] h-[270px] rounded-xl sm:right-[10.8rem] sm:top-[478.1rem]  md:right-[15.5rem] md:top-[478.1rem] lg:right-[22.8rem] lg:top-[472rem] xl:right-[19.4rem] xl:top-[1020.2rem] xl:w-[19rem] xl:h-[38rem]"
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