import React from "react";
import "./HomePage.scss";

import { Header } from "./Header/Header";

import Section from "./Categories/Section";

interface IProps {
  msg: string;
}

export const HomePage: React.FC<IProps> = ({ msg }) => {
  return (
    <div className="body">
      <Header />
      <Section />
    </div>
  );
};
