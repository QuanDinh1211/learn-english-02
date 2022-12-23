import React from "react";

import "./content_four.scss";

const ContentFour = () => {
  return (
    <div className="content-four-container">
      <div className="content-four-wrapper">
        <div className="content-four-first">
          <div className="content-four-first-wrapper">
            <img src={require("../../assets/img/contentfour.jpg")} alt="img" />
          </div>
        </div>
        <div className="content-four-last">
          <div className="content-four-last-item">
            <div className="content-four-last-item-title">
              <h2>Here’s the truth:</h2>
            </div>
            <div className="content-four-last-item-text">
              <span>
                There are a million moving parts and pieces, analysis paralysis,
                and shiny object syndrome that prevent you from doing what you
                want, and most importantly, from actually earning money.
              </span>
            </div>
          </div>
          <div className="content-four-last-item">
            <div className="content-four-last-item-title">
              <h2>What if you could…</h2>
            </div>
            <div className="content-four-last-item-text">
              <span>
                Have a step-by-step, easy-to-understand system to walk you
                through everything you need to start monetizing your content on
                Instagram…by growing a 1:1 online coaching program?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFour;
