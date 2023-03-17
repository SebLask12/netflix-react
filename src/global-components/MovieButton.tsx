import React from "react";

import "./MovieButton.scss";
import Arrow from "@/assets/images/arrow-down.svg";

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
      <span className={`content`}>
        <img
          className={`content__arrow content__arrow--${opposite}`}
          src={Arrow}
        />
      </span>
    </button>
  );
};
export default ButtonMovie;
