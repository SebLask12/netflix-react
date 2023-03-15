import React from "react";

import Navbar from "./Navbar";
import classes from "./Header.module.scss";
import MovieTitle from "../../../../../assets/images/header/Wednesday.png";
import PlayIcon from "../../../../../assets/images/header/Vector.svg";
import InfoCircle from "../../../../../assets/images/header/info-circle.svg";

export const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <Navbar />
      <div className={classes.headerContent}>
        <div className={classes.headerContent__heading}>
          <div className={classes.headerContent__heading__icon}>
            <span style={{ fontSize: `10px` }}>TOP</span>10
          </div>
          <span className={classes.headerContent__heading__title}>
            Nr 5 wśród seriali dzisiaj
          </span>
        </div>
        <img
          className={classes.headerContent__movieTitle}
          src={MovieTitle}
          alt=""
        />
        <div className={classes.headerContent__description}>
          Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi śledztwo
          w sprawie serii zabójstw, przysparzając sobie nowych przyjaciół i
          wrogów w Akademii Nevermore.
        </div>
        <div className={classes.headerContent__buttons}>
          <button className={classes.headerContent__button}>
            <img src={PlayIcon} alt="" />
            <span>Odtwórz</span>
          </button>
          <button
            className={`${classes.headerContent__button} ${classes.headerContent__buttonBlurred}`}
          >
            <img src={InfoCircle} alt="" />
            <span>Więcej informacji</span>
          </button>
        </div>
      </div>
    </div>
  );
};
