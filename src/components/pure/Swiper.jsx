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
const openToDoList = () => {
  window.open('https://rodrigoamestoy2.github.io/Portfolio/todo.html', '_blank');
}
const openNASA = () => {
  window.open('https://rodrigoamestoy2.github.io/Portfolio/nasa.html', '_blank');
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
      onSwiper={(swiper) => console.log()}
      onSlideChange={() => console.log()}
    >
      <SwiperSlide>
      <img src={ECOMMERCE} onClick={ openEcommerce }/>
      <figcaption>TAP ME</figcaption>
      </SwiperSlide>
      <SwiperSlide>
      <img src={TODOLIST} onClick={ openToDoList }/>
      <figcaption>TAP ME</figcaption>
      </SwiperSlide>
      <SwiperSlide>
      <img src={NASA} onClick={ openNASA }/>
      <figcaption>TAP ME</figcaption>
      </SwiperSlide>
    </Swiper>
  );
};

export default Presentation;