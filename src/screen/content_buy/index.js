import React from "react";

import Button from "../../components/layout/button";

import "./contentBuyStyle.scss";

const ContenBuy = () => {
  return (
    <div className="ContenBuy-container">
      <div className="ContenBuy-wrapper">
        <div className="ContenBuy-title">
          <h2>CHỈ 100 HỌC VIÊN ĐẦU TIÊN</h2>
        </div>
        <div className="ContenBuy-body">
          <div className="ContenBuy-sale">
            <div className="ContenBuy-sale-percent">
              <span>25%</span>
            </div>
            <div className="ContenBuy-sale-off">
              <span>OFF</span>
            </div>
          </div>
          <div className="ContenBuy-price-root">
            <span>3.888k</span>
          </div>
          <div className="ContenBuy-price-sale">
            <span>Chỉ còn</span>
            <span className="ContenBuy-price-sale-text">2.916k</span>
          </div>
        </div>
        <div className="ContenBuy-price-btn">
          <div className="ContenBuy-btn-item">
            <Button value="ĐĂNG KÝ NGAY!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContenBuy;
