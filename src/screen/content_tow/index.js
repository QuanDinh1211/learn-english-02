import React, { useState } from "react";

import "./content_tow.scss";

const ContentTow = () => {
  const [indexData, setindexData] = useState(0);

  const dataContenTow = [
    {
      id: 1,
      title: "252",
      description: "VIDEO CLIPS TRONG KHOÁ HỌC",
    },
    {
      id: 2,
      title: "13",
      description: "MOVIES",
    },
    {
      id: 3,
      title: "43",
      description: "BÀI HỌC TƯƠNG TÁC",
    },
    {
      id: 4,
      title: "12",
      description: "VIDEO TỰ QUAY",
    },
    {
      id: 5,
      title: "3",
      description: "VIDEO HỌC NGẮN MỖI NGÀY",
    },
  ];

  const handleIncIndexdata = () => {
    if (dataContenTow.length === indexData + 1) {
      setindexData(0);
    } else {
      setindexData(indexData + 1);
    }
  };

  const handleMinIndexdata = () => {
    if (indexData === 0) {
      setindexData(dataContenTow.length - 1);
    } else {
      setindexData(indexData - 1);
    }
  };

  return (
    <div className="content-tow-container">
      <div className="content-tow-wrapper">
        <div className="content-tow-bigdesktop-container">
          <div className="content-tow-bigdesktop-list-item">
            <div className="content-tow-bigdesktop-item">
              <div className="content-tow-bigdesktop-item-first">
                <span>252</span>
              </div>
              <div className="content-tow-bigdesktop-item-last">
                <span>VIDEO CLIPS TRONG KHÓA HỌC</span>
              </div>
            </div>
            <div className="content-tow-bigdesktop-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="content-tow-bigdesktop-item">
              <div className="content-tow-bigdesktop-item-first">
                <span>13</span>
              </div>
              <div className="content-tow-bigdesktop-item-last">
                <span>MOVIES</span>
              </div>
            </div>
            <div className="content-tow-bigdesktop-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="content-tow-bigdesktop-item">
              <div className="content-tow-bigdesktop-item-first">
                <span>43</span>
              </div>
              <div className="content-tow-bigdesktop-item-last">
                <span>BÀI HỌC TƯƠNG TÁC</span>
              </div>
            </div>
            <div className="content-tow-bigdesktop-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="content-tow-bigdesktop-item">
              <div className="content-tow-bigdesktop-item-first">
                <span>12</span>
              </div>
              <div className="content-tow-bigdesktop-item-last">
                <span>VIDEO TỰ QUAY</span>
              </div>
            </div>
            <div className="content-tow-bigdesktop-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="content-tow-bigdesktop-item">
              <div className="content-tow-bigdesktop-item-first">
                <span>03</span>
              </div>
              <div className="content-tow-bigdesktop-item-last">
                <span>VIDEO HỌC NGẮN MỖI NGÀY</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-tow-mobile-container">
          <div className="content-tow-mobile-icon-left hover">
            <i className="fas fa-chevron-left" onClick={handleMinIndexdata}></i>
          </div>
          <div className="content-tow-mobile-item">
            <div className="content-tow-mobile-item-first">
              <span className="title-background">
                {dataContenTow[indexData].title}
              </span>
            </div>
            <div className="content-tow-mobile-item-last">
              <span>{dataContenTow[indexData].description}</span>
            </div>
          </div>
          <div className="content-tow-mobile-icon-right hover">
            <i
              className="fas fa-chevron-right"
              onClick={handleIncIndexdata}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTow;
