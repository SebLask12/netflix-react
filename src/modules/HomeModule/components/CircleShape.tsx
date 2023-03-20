import React, { Children } from "react";

import classes from "./CircleShape.module.scss";

type Props = {
  img: string,
}

const CircleShape: React.FC<Props> = ({img}) => {
  return <span className={classes.circle}>
    <img src={img}/>
  </span>;
};

export default CircleShape;
