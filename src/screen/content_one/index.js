import React from "react";

import "./contenOne.scss";
// import Button from "../../components/layout/button";

const ContentOne = () => {
  return (
    <div className="content-one-container">
      <div className="content-one-header">
        <div className="content-one-header-list-item">
          {/*}
          <div className="content-one-header-item">
            <a href="#asdasd1">HOME</a>
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
        */}
        </div>
      </div>
      {/*}
      <div className="content-one-logo web"></div>
  */}
      <div className="content-one-body">
        <div className="content-one-body-wrapper">
          <div className="content-one-body-first mobile">
            <img src={require("../../assets/img/contentone1.jpg")} alt="img" />
            <div className="content-one-logo"></div>
          </div>
          <div className="content-one-body-last">
            <div className="content-one-body-last-wrapper">
              <div className="content-one-body-last-header">
                <div className="content-one-body-last-header-text-1">
                  <h1>MẤT BAO LÂU ĐỂ</h1>
                </div>
                <div className="content-one-body-last-header-text-2">
                  <h1>NÓI ĐƯỢC TIẾNG ANH?</h1>
                </div>
              </div>
              <div className="content-one-body-last-body">
                <div className="content-one-body-last-body-text">
                  <span>1 tháng? 1 năm? hay….?.</span>
                </div>
                <div className="content-one-body-last-body-btn">
                  <div className="content-one-body-last-body-btn-wrapper">
                    {/* <Button value="ĐĂNG KÝ NGAY" /> */}
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
