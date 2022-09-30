import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// IMG 

import ECOMMERCE from '../../img/ecommerce.jpg';
import TODOLIST from '../../img/todolist.jpg';
import NASA from '../../img/nasa.jpg';

const openEcommerce = () => {
  window.open('https://rodrigoamestoy.github.io/Proyecto-JaP/index', '_blank');
}

const Presentation = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <img src={ECOMMERCE} onClick={ openEcommerce }/>
      <figcaption>TAP ME</figcaption>
      </SwiperSlide>
      <SwiperSlide>
      <img src={TODOLIST}/>
      <figcaption>TAP ME</figcaption>
      </SwiperSlide>
      <SwiperSlide>
      <img src={NASA}/>
      <figcaption>TAP ME</figcaption>
      </SwiperSlide>
    </Swiper>
  );
};

export default Presentation;