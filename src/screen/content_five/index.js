import React from "react";

import "./contenrFive.scss";
import Button from "../../components/layout/button";

const ContentFive = () => {
  return (
    <div className="content-five-container">
      <div className="content-five-wrapper">
        <div className="content-five-first">
          <div className="content-five-first-wrapper">
            <div className="content-five-first-header">
              <h2>So you can finally:</h2>
            </div>
            <div className="content-five-first-body">
              <div className="content-five-first-body-item">
                <div className="content-five-first-body-item-icon">
                  <img
                    src={require("../../assets/img/checkicon.png")}
                    alt="icon"
                  />
                </div>
                <div className="content-five-first-body-item-text">
                  <span>
                    Be recognized for YOUR expertise, despite being a “newcomer”
                    in the online space.
                  </span>
                </div>
              </div>
              <div className="content-five-first-body-item">
                <div className="content-five-first-body-item-icon">
                  <img
                    src={require("../../assets/img/checkicon.png")}
                    alt="icon"
                  />
                </div>
                <div className="content-five-first-body-item-text">
                  <span>
                    Get consistent work with paying clients, all sourced from
                    your efforts on social media.
                  </span>
                </div>
              </div>
              <div className="content-five-first-body-item">
                <div className="content-five-first-body-item-icon">
                  <img
                    src={require("../../assets/img/checkicon.png")}
                    alt="icon"
                  />
                </div>
                <div className="content-five-first-body-item-text">
                  <span>
                    Build a signature 1:1 offer that allows you to attract your
                    ideal clients and give them the best results while you enjoy
                    4 and 5 figure months.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-five-last">
          <div className="content-five-last-wrapper">
            <div className="content-five-last-header">
              <h2>
                THE BOSSGRAM ACADEMY® IS A LIFETIME* ACCESS PROGRAM THAT
                OUTLINES THE A-Z OF STARTING AND LAUNCHING A THRIVING ONLINE
                COACHING PROGRAM USING INSTAGRAM.
              </h2>
            </div>
            <div className="content-five-last-body">
              <div className="content-five-last-body-btn">
                <Button value="ENROLL NOW" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFive;
