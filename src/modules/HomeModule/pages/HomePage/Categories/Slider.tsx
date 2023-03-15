import React from "react";

import MovieItem from "@/global-components/MovieItem";

import classes from "./Slider.module.scss";

import Image1 from "../../../../../assets/images/section1/1.png";
import Image2 from "../../../../../assets/images/section1/2.png";
import Image3 from "../../../../../assets/images/section1/3.png";
import Image4 from "../../../../../assets/images/section1/4.png";
import Image5 from "../../../../../assets/images/section1/5.png";
import Image6 from "../../../../../assets/images/section1/6.png";
import { type } from "os";

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
    title: string,
}

const Slider: React.FC<Props> = (props) => {
  return (
    <div className={classes.slider}>
      <div className={classes.sliderTitle}>{props.title}</div>
      <div className={classes.container}>
        {images.map((image, i) => (
          <MovieItem key={i} src={image.src} alt={image.alt} />
        ))}
        <div className={classes.arrow__right}></div>
      </div>
    </div>
  );
};

export default Slider;
