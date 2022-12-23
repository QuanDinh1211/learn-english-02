import React from "react";

import "./contentNice.scss";
import Button from "../../components/layout/button";

const ContentNice = () => {
  return (
    <div id="buy-course" className="content-nice-container">
      <div className="content-nice-wrapper">
        <div className="content-nice-header">
          <div className="content-nice-header-title">
            <h2>READY TO FINALLY BE THE BOSS OF YOUR BUSINESS?</h2>
          </div>
          <div className="content-nice-header-des">
            <h3>READY TO FINALLY BE THE BOSS OF YOUR BUSINESS?</h3>
          </div>
        </div>
        <div className="content-nice-body">
          <div className="content-nice-body-list">
            <div className="content-nice-body-item">
              <div className="content-nice-body-item-first">
                <span>10 MONTHLY PAYMENTS OF</span>
              </div>
              <div className="content-nice-body-item-center">
                <span>$220</span>
                <span className="content-nice-body-item-center-price">
                  /EACH
                </span>
              </div>
              <div className="content-nice-body-item-last">
                <div className="content-nice-body-item-last-btn">
                  <Button value="ENROLL NOW" />
                </div>
              </div>
            </div>
            <div className="content-nice-body-item">
              <div className="content-nice-body-item-first">
                <span>6 MONTHLY PAYMENTS OF</span>
              </div>
              <div className="content-nice-body-item-center">
                <span>$367</span>
                <span className="content-nice-body-item-center-price">
                  /EACH
                </span>
              </div>
              <div className="content-nice-body-item-last">
                <div className="content-nice-body-item-last-btn">
                  <Button value="ENROLL NOW" />
                </div>
              </div>
            </div>
            <div className="content-nice-body-item content-nice-body-item-access">
              <div className="content-nice-body-item-first">
                <span>ONE-TIME PAYMENT</span>
              </div>
              <div className="content-nice-body-item-center">
                <span>$1,997</span>
                <span className="content-nice-body-item-center-price">
                  /EACH
                </span>
              </div>
              <div className="content-nice-body-item-last">
                <div className="content-nice-body-item-last-btn">
                  <Button value="ENROLL NOW" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNice;
