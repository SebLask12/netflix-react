import React, { useState } from "react";
import classes from "./MovieItem.module.scss";

import Play from "@/assets/images/play.svg";
import Like from "@/assets/images/like.svg";
import Arrow from "@/assets/images/arrow.svg";

type AvatarProps = {
  src: string;
  alt: string;
};

const MovieItem: React.FC<AvatarProps> = ({ src, alt }) => {
  const [mouseOn, setMouseOn] = useState(false);

  const style = {
    transform: `scale(1.4) translateY(0)`,
    zIndex: 10,
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
      style={mouseOn ? style : undefined}
    >
      <img
        className={classes.movieItem}
        src={src}
        alt={alt}
      />
      {mouseOn && (
        <div className={classes.container__bottomPanel}>
          <button>
            <img src={Play} />
          </button>
          <button>+</button>
          <button>
            <img src={Like} />
          </button>
          <button>
            <img
              src={Arrow}
              style={{ rotate: "90deg" }}
            />
          </button>
          <span></span>
          <span></span>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
