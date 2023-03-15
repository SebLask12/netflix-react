import React from "react";

import Slider from "./Slider";

import classes from "./Section.module.scss";

const Section = () => {
  return (
    <div className={classes.section1}>
      <Slider title={'Docenione przez krytyków'}/>
      <Slider title={'Popularne teraz'}/>
      <Slider title={'Obejrzyj ponownie'}/>
    </div>
  );
};

export default Section;
