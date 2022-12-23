import React from "react";

import "./button.scss";

const Button = ({ value }) => {
  return (
    <div className="btn-container">
      <span>{value}</span>
    </div>
  );
};

export default Button;
