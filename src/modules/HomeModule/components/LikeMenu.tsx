import React from "react";

import classes from "./LikeMenu.module.scss";

import Like from "@/assets/images/like.svg";
import Favourite from "@/assets/images/favourite.svg";

const LikeMenu: React.FC = () => {
  return (
    <div className={classes.likeMenuContainer}>
      <div className={classes.imgContainer}>
        <img
          src={Like}
          className={classes.img}
          alt="Dislike"
          style={{ rotate: "180deg" }}
        />
      </div>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={Like} alt="Liek" />
      </div>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={Favourite} alt="Favourite" />
      </div>
    </div>
  );
};

export default LikeMenu;
