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
              <h2>KẾT QUẢ CỦA BẠN SAU 3 THÁNG</h2>
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
                  NÓI ĐƯỢC TIẾNG ANH THÔNG DỤNG TRONG CUỘC SỐNG HÀNG NGÀY.
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
                  NGHE HIỂU ĐƯỢC CÁC CHỦ ĐỀ QUEN THUỘC THƯỜNG NGÀY.
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
                  PHÁT ÂM CHUẨN.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContentFive;
