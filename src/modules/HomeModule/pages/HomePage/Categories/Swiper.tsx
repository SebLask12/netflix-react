// Import Swiper React components
import React, { useRef, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/scss";
import "./Swiper.scss";

import MovieItem from "@/modules/HomeModule/components/MovieItem";
import ButtonMovie from "@/modules/HomeModule/components/MovieButton";

import Image1 from "@/assets/images/section1/1.png";
import Image2 from "@/assets/images/section1/2.png";
import Image3 from "@/assets/images/section1/3.png";
import Image4 from "@/assets/images/section1/4.png";
import Image5 from "@/assets/images/section1/5.png";
import Image6 from "@/assets/images/section1/6.png";

import Arrow from "@/assets/images/arrow.svg";

SwiperCore.use([Navigation, Pagination]);

type Image = {
  id: number;
  src: string;
  alt: string;
};

const images: Image[] = [
  { id: 1, src: Image1, alt: "Breaking Bad" },
  { id: 2, src: Image2, alt: "Walking Dead" },
  { id: 3, src: Image3, alt: "Vikings" },
  { id: 4, src: Image4, alt: "Pekay Blinders" },
  { id: 5, src: Image5, alt: "the Office" },
  { id: 6, src: Image6, alt: "Lucifer" },
  { id: 7, src: Image3, alt: "Vikings" },
  { id: 8, src: Image2, alt: "Walking Dead" },
  { id: 9, src: Image1, alt: "Breaking Bad" },
  { id: 10, src: Image4, alt: "Pekay Blinders" },
];

type Props = {
  title: string;
};

const Swipe: React.FC<Props> = ({ title }) => {
  const [leftArrow, setLeftArrow] = useState(false);
  const [activeSlide, setActiveSlide] = useState<number | undefined>(0);
  const swiperRef = useRef<SwiperCore>();

const swiper = useSwiper();

  const handleClickPrev = () => {
    swiperRef.current?.slidePrev();
  };
  const handleClickNext = () => {
    swiperRef.current?.slideNext();
  };

  const onSlideChangeHandler = () => {
    setActiveSlide(swiperRef.current?.realIndex);
    setLeftArrow(true);
  }

  return (
    <React.Fragment>
      <div className="swiper-container">
      <div className="heading">
        <h3>{title}</h3>
        <a href='#' className="displayAll">Zobacz wszystkie <img src={Arrow}/></a>
      </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          loop={true}
          slidesPerView={"auto"}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
          onSlideChange={onSlideChangeHandler}
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <MovieItem src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
          <ButtonMovie opposite={"left"} onClick={handleClickPrev} activeLeft={leftArrow}/>
          <ButtonMovie opposite={"right"} onClick={handleClickNext} />
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Swipe;
