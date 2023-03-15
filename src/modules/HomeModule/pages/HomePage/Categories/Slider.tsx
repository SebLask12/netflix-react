import React, { useState, useRef } from "react";

import MovieItem from "@/global-components/MovieItem";

import classes from "./Slider.module.scss";

import Image1 from "../../../../../assets/images/section1/1.png";
import Image2 from "../../../../../assets/images/section1/2.png";
import Image3 from "../../../../../assets/images/section1/3.png";
import Image4 from "../../../../../assets/images/section1/4.png";
import Image5 from "../../../../../assets/images/section1/5.png";
import Image6 from "../../../../../assets/images/section1/6.png";

import ArrowRight from "../../../../../assets/images/arrow-down.svg";

type Image = {
  id: number;
  src: string;
  alt: string;
};

const images1: Image[] = [
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

const Slider: React.FC<Props> = (props) => {
  const [position, setPosition] = useState(0);
  const [images, setImages] = useState(images1);
  const [slided, setSlided] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleNextSlide = () => {
    if (!slided) {
      setSlided(true);
    }

    setImages((prevState) => {
      const slice = [prevState.pop()];
      return slice.concat(prevState);
    });

    if (containerRef.current !== null) {
      setPosition(position - 256);
      console.log(containerRef.current.offsetWidth);
      if (
        position ===
        -(wrapperRef.current!.offsetWidth - containerRef.current.offsetWidth)
      ) {
        setPosition(0);
      }
    }
  };

  const handlePrevSlide = () => {
    if (containerRef.current !== null) {
      setPosition(position + 256);
      console.log(containerRef.current.offsetWidth);
      if (
        position ===
        -(wrapperRef.current!.offsetWidth - containerRef.current.offsetWidth)
      ) {
        setPosition(0);
      }
    }
  };

  return (
    <div
      className={classes.slider}
      ref={containerRef}
    >
      <div className={classes.sliderTitle}>{props.title}</div>
      <div
        className={classes.container}
        ref={wrapperRef}
        style={{ transform: `translateX(${position}px)` }}
      >
        {images.map((image, i) => (
          <MovieItem
            key={i}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
      <button
        className={`${classes.arrow} ${classes.arrowRight}`}
        onClick={handleNextSlide}
      >
        <span className={classes.arrow__circle}>
          <img
            className={classes.arrow__circleArrow}
            src={ArrowRight}
          />
        </span>
      </button>
      {slided && (
        <button
          className={`${classes.arrow} ${classes.arrowLeft}`}
          onClick={handlePrevSlide}
        >
          <span
            className={classes.arrow__circle}
            style={{ left: "0" }}
          >
            <img
              className={classes.arrow__circleArrow}
              src={ArrowRight}
              style={{ rotate: "180deg" }}
            />
          </span>
        </button>
      )}
    </div>
  );
};

export default Slider;
