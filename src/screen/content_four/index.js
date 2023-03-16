import React from "react";

import "./content_four.scss";

const ContentFour = () => {
  return (
    <div className="content-four-container">
      <div className="content-four-wrapper">
        <div className="content-four-first">
          <div className="content-four-first-wrapper">
            <img src={require("../../assets/img/contentfour.png")} alt="img" />
          </div>
        </div>
        <div className="content-four-last">
          <div className="content-four-last-item">
            <div className="content-four-last-item-title">
              <h2>SỰ THẬT LÀ</h2>
            </div>
            <div className="content-four-last-item-text">
              <span>
              Bạn đang có cơ hội trải nghiệm học tiếng Anh 1-1 chỉ với 8.888k
              </span>
            </div>
          </div>
          <div className="content-four-last-item">
            <div className="content-four-last-item-title">
              <h2>NẮM LẤY CƠ HỘI NÀY</h2>
            </div>
            <div className="content-four-last-item-text">
              <span>
              Bạn đã nằm trong TOP 1% DÂN SỐ VIỆT NAM có thể nói Tiếng anh LƯU LOÁT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFour;
