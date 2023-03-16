import React from "react";
import classes from "./MovieItem.module.scss";

type AvatarProps = {
  src: string;
  alt: string;
};

const MovieItem: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div draggable="false">
      <img className={classes.movieItem} src={src} alt={alt} draggable="false"/>
    </div>
  );
};

export default MovieItem;
