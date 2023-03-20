import React from "react";

import "./MovieButton.scss";
import Arrow from "@/assets/images/arrow.svg";

import CircleShape from "./CircleShape";

type Props = {
  opposite: string,
  onClick: () => void,
}

const ButtonMovie: React.FC<Props> = ({opposite, onClick}) => {
  // const swiperRef = useRef<SwiperCore>(); 
  return (
    <button
      className={`buttonContainer buttonContainer__${opposite}`}
      onClick={onClick}
    >
      <CircleShape img={Arrow}/>
    </button>
  );
};
export default ButtonMovie;
