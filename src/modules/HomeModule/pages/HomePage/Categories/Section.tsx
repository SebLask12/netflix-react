import React from "react";

import Swipe from "./Swiper";

import classes from "./Section.module.scss";

const Section: React.FC = () => {
  const titleFirst = "Docenione przez krytyków";
  const titleSecond = "Popularne teraz";
  const titleThird = "Obejrzyj ponownie";
  return (
    <div className={classes.section1}>
      <Swipe title={titleFirst}/>
      <Swipe title={titleSecond}/>
      <Swipe title={titleThird}/>
    </div>
  );
};

export default Section;
