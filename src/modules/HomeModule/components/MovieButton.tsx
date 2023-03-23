import React, { useState } from "react";

import "./MovieButton.scss";
import Arrow from "@/assets/images/arrow.svg";

import CircleShape from "./CircleShape";

type Props = {
  opposite: string;
  onClick: () => void;
  activeLeft?: boolean;
};

const ButtonMovie: React.FC<Props> = ({ opposite, onClick, activeLeft}) => {
  // const swiperRef = useRef<SwiperCore>();
  const [isClicked, setIsClicked] = useState(false);
  let rotate;
  let left;
  let style = {};
  const onClickHandler = () => {
    setIsClicked(!isClicked);
  };

  if (opposite === "left") {
    rotate = 180;
    if (activeLeft) style = { left: "-52px" };
    else {
      style = {
        left: "-52px",
        display: "none",
      };
    }
  }

  return (
    <button
      className={`buttonContainer buttonContainer__${opposite}`}
      onClick={onClick}
      style={style}
    >
      <CircleShape
        img={Arrow}
        bgColor=""
        rotate={rotate}
        onClick={onClickHandler}
      />
    </button>
  );
};
export default ButtonMovie;
