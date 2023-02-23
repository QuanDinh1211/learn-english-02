import React, { useContext } from "react";

import "./button.scss";

import { RootContext } from "../../../store/context/rootContext";

const Button = ({ value }) => {
  const { setshowModal } = useContext(RootContext);
  const handleClickBtn = () => {
    window.scrollTo(0, 0);
    setshowModal(true);
  };
  return (
    <div className="btn-container" onClick={handleClickBtn}>
      <span>{value}</span>
    </div>
  );
};

export default Button;
