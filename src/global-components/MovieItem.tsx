import React from "react";
import classes from "./MovieItem.module.scss";

type AvatarProps = {
  src: string;
  alt: string;
};

const MovieItem: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <a href="#">
      <img className={classes.movieItem} src={src} alt={alt} />
    </a>
  );
};

export default MovieItem;
