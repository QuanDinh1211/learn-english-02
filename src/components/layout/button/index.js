import React from "react";

import "./button.scss";

const Button = ({ value }) => {
  return (
    <div className="btn-container">
      <a href="#buy-course">{value}</a>
    </div>
  );
};

export default Button;
