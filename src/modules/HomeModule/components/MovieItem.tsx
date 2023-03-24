import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./MovieItem.module.scss";

import Play from "@/assets/images/play.svg";
import Like from "@/assets/images/like.svg";
import Arrow from "@/assets/images/arrow.svg";
import Plus from "@/assets/images/plus.svg";

import CircleShape from "./CircleShape";
import LikeMenu from "./LikeMenu";
import SeasonList from "./SeasonList";

type AvatarProps = {
  src: string;
  alt: string;
};

const MovieItem: React.FC<AvatarProps> = ({ src, alt }) => {
  const [mouseOn, setMouseOn] = useState(false);
  const [isLikeMenuShow, setIsLikeMenuShow] = useState(false);
  const [isEpisodeListShow, setIsEpisodeListShow] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const likeMenuRef = useRef<HTMLDivElement>(null);
  // console.log(refContainer.current?.offsetWidth)

  const widthContainer = refContainer.current?.offsetWidth;

  const styleContainter = {
    width: "360px",
    height: "300px",
    marginLeft: "-52px",
    marginTop: "-26px",
  };

  const bottomStyle = mouseOn && classes.container__bottomPanelActive;

  const mouseEneterHandler = () => {
    setMouseOn(true);
  };
  const mouseLeaveHandler = () => {
    setMouseOn(false);
  };

  const mountLikeMenu = () => {
    setIsLikeMenuShow(true);
  };

  const dismountLikeMenu = () => {
    setIsLikeMenuShow(false);
  };

  const mountEpisodeList = () => {
    setIsEpisodeListShow(true);
  };

  const dismountEpisodeList = () => {
    setIsEpisodeListShow(false);
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={mouseEneterHandler}
      onMouseLeave={mouseLeaveHandler}
      style={mouseOn ? styleContainter : undefined}
      ref={refContainer}
    >
      <div className={classes.imgContainer}>
        <img
          className={classes.image}
          src={src}
          alt={alt}
          style={mouseOn ? { borderRadius: `16px 16px 0 0` } : undefined}
        />
      </div>
      <div className={`${classes.container__bottomPanel} ${bottomStyle}`}>
        <div className={classes.menuContainer}>
          <div className={`${classes.menu}`}>
            <CircleShape img={Play} bgColor="white" />
            <CircleShape img={Plus} />
            <div onMouseEnter={mountLikeMenu} onMouseLeave={dismountLikeMenu}>
              <CircleShape img={Like} />
              <CSSTransition
                in={isLikeMenuShow}
                mountOnEnter
                unmountOnExit
                timeout={500}
                classNames={{
                  enterActive: classes.enterActive,
                  exitActive: classes.exitActive,
                }}
              >
                <LikeMenu />
              </CSSTransition>
            </div>
          </div>
          <div
            onMouseEnter={mountEpisodeList}
            onMouseLeave={dismountEpisodeList}
          >
            <CircleShape img={Arrow} rotate={90} /><CSSTransition
                in={isEpisodeListShow}
                mountOnEnter
                unmountOnExit
                timeout={500}
                classNames={{
                  enterActive: classes.enterActive,
                  exitActive: classes.exitActive,
                }}
              >
                <SeasonList />
              </CSSTransition>
          </div>
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
