import React from "react";

import "./MovieButton.scss";
import Arrow from "@/assets/images/arrow.svg";

import CircleShape from "./CircleShape";

type Props = {
  opposite: string;
  onClick: () => void;
};

const ButtonMovie: React.FC<Props> = ({ opposite, onClick }) => {
  // const swiperRef = useRef<SwiperCore>();
  let rotate;
  if (opposite === "left") {
    rotate = 180;
  }

  return (
    <button
      className={`buttonContainer buttonContainer__${opposite}`}
      onClick={onClick}
    >
      <CircleShape img={Arrow} bgColor="" rotate={rotate} />
    </button>
  );
};
export default ButtonMovie;
