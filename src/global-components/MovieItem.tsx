import React, { useState } from "react";
import classes from "./MovieItem.module.scss";

type AvatarProps = {
  src: string;
  alt: string;
};

const MovieItem: React.FC<AvatarProps> = ({ src, alt }) => {
  const [mouseOn, setMouseOn] = useState(false);

  const mouseHandler = () => {
    setMouseOn(true);
  };

  return (
    <div draggable="false">
      <img
        className={classes.movieItem}
        src={src}
        alt={alt}
        draggable="false"
      />
      {mouseOn && (
        <div>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <span></span>
          <span></span>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
