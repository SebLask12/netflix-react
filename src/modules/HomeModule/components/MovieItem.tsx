import React, { useState } from "react";
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

  const styleContainter = {
    transform: `scale(1.4)`,
    zIndex: 20,
  };

  const styleBottomPanel = {
    transform: `translateY(0)`,
  };

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
    >
      <img
        className={classes.image}
        src={src}
        alt={alt}
        style={mouseOn ? { borderRadius: `16px 16px 0 0` } : undefined}
      />
      <div
        className={classes.container__bottomPanel}
        style={mouseOn ? styleBottomPanel : undefined}
      >
        <div className={classes.menu}>
        <CircleShape img={Play}/>
        <CircleShape img={Plus}/>
        <CircleShape img={Like}/>
        </div>
        
        <CircleShape img={Arrow}/>
        <span></span>
        <span></span>
        <div></div>
      </div>
    </div>
  );
};

export default MovieItem;
