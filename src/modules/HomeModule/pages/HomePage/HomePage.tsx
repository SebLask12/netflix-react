import React from "react";
import "./HomePage.scss";

import { Header } from "./Header/Header";

interface IProps {
  msg: string;
}

export const HomePage: React.FC<IProps> = ({ msg }) => {

  return (
    <>
      <h1>{msg}</h1>
      <p>A</p>
      <Header />
    </>
  );
};
