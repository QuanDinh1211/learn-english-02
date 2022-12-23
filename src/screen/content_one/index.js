import React from "react";

import "./contenOne.scss";
import Button from "../../components/layout/button";

const ContentOne = () => {
  return (
    <div className="content-one-container">
      <div className="content-one-header">
        <div className="content-one-header-list-item">
          <div className="content-one-header-item">
            <a href="#asdasd">HOME</a>
          </div>
          <div className="content-one-header-item">
            <a href="#sdasd">FAQ</a>
          </div>
          <div className="content-one-header-item">
            <a href="#asda">REVIEWS</a>
          </div>
          <div className="content-one-header-item">
            <a href="#dad">THE DETAILS</a>
          </div>
        </div>
      </div>
      <div className="content-one-logo"></div>
      <div className="content-one-body">
        <div className="content-one-body-wrapper">
          <div className="content-one-body-first">
            <img src={require("../../assets/img/contentone1.png")} alt="img" />
          </div>
          <div className="content-one-body-last">
            <div className="content-one-body-last-wrapper">
              <div className="content-one-body-last-header">
                <div className="content-one-body-last-header-text-1">
                  <h1>TURN FOLLOWERS</h1>
                </div>
                <div className="content-one-body-last-header-text-2">
                  <h1>INTO PAID CLIENTS</h1>
                </div>
              </div>
              <div className="content-one-body-last-body">
                <div className="content-one-body-last-body-text">
                  <span>
                    A 3-PHASE PROCESS TO GET VISIBLE ON INSTAGRAM AND TURN
                    FOLLOWERS INTO CLIENTS IN 90 DAYS OR LESS.
                  </span>
                </div>
                <div className="content-one-body-last-body-btn">
                  <div className="content-one-body-last-body-btn-wrapper">
                    <Button value="ENROLL NOW" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
