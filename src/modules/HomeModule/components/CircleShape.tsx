import React, { Children } from "react";

import classes from "./CircleShape.module.scss";

type Props = {
  img: string;
  bgColor?: string;
  rotate?: number;
};

const CircleShape: React.FC<Props> = ({ img, bgColor, rotate }) => {
  return (
    <a
      className={classes.circle}
      style={{ background: `${bgColor}`, rotate: `${rotate}deg` }}
    >
      <img src={img} className={classes.img} />
    </a>
  );
};

export default CircleShape;
