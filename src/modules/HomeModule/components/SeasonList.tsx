import React from "react";

import classes from "./SeasonList.module.scss";

const SeasonList: React.FC = () => {
  const listData = [
    { title: "Sezon 1", count: 7 },
    { title: "Sezon 2", count: 13 },
    { title: "Sezon 3", count: 13 },
    { title: "Sezon 4", count: 13 },
    { title: "Sezon 5", count: 16 },
  ];
  return (
    <div className={classes.listContainer}>
      <ul className={classes.list}>
        {listData.map((el) => (
          <li key={el.title} className={classes.listElement}>
            <span className={classes.listElement_title}>{el.title}</span> 
            <span className={classes.listElement__episode}>{el.count}</span>
          </li>
        ))}
      </ul>
      <a href="#" className={classes.link}>
        Zobacz wszystkie
      </a>
    </div>
  );
};

export default SeasonList;
