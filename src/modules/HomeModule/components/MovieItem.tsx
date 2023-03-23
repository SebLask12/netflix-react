import React, { useState, useRef } from "react";
import classes from "./MovieItem.module.scss";

import Play from "@/assets/images/play.svg";
import Like from "@/assets/images/like.svg";
import Arrow from "@/assets/images/arrow.svg";
import Plus from "@/assets/images/plus.svg";

import CircleShape from "./CircleShape";

type AvatarProps = {
  src: string;
  alt: string;
};

const MovieItem: React.FC<AvatarProps> = ({ src, alt }) => {
  const [mouseOn, setMouseOn] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  // console.log(refContainer.current?.offsetWidth)

  const widthContainer = refContainer.current?.offsetWidth;

  const styleContainter = {
    width: "360px",
    height: "300px",
    marginLeft: "-52px",
  };

  const styleBottomPanel = {
    visibility: "visible",
    opacity: "1",
  };

  const bottomStyle = mouseOn && classes.container__bottomPanelActive;

  const mouseEneterHandler = () => {
    setMouseOn(true);
  };
  const mouseLeaveHandler = () => {
    setMouseOn(false);
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={mouseEneterHandler}
      onMouseLeave={mouseLeaveHandler}
      style={mouseOn ? styleContainter : undefined}
      ref={refContainer}
    >
      <img
        className={classes.image}
        src={src}
        alt={alt}
        style={mouseOn ? { borderRadius: `16px 16px 0 0` } : undefined}
      />
      <div
        className={`${classes.container__bottomPanel} ${bottomStyle}`}
      >
        <div className={classes.menuContainer}>
          <div className={`${classes.menu}`}>
            <CircleShape img={Play} bgColor="white" />
            <CircleShape img={Plus} />
            <CircleShape img={Like} />
          </div>
          <CircleShape img={Arrow} rotate={90} />
        </div>
        <div className={classes.menuContainer}>
          <div className={classes.titleMovie}>W róg</div>
          <div className={classes.time}>24 z 58 min</div>
        </div>
        <span className={classes.progressBar}>
          <span className={classes.progress}></span>
        </span>
      </div>
    </div>
  );
};

export default MovieItem;
