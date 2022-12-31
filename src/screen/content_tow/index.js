import React, { useState } from "react";

import "./content_tow.scss";

const ContentTow = () => {
  const [indexData, setindexData] = useState(0);

  const dataContenTow = [
    {
      id: 1,
      title: "6,000+",
      description: "STUDENTS SERVER IN ...",
    },
    {
      id: 2,
      title: "100+",
      description: "COUNTRIES ACROSS ...",
    },
    {
      id: 3,
      title: "1,000+",
      description: "NICHES WITH ...",
    },
    {
      id: 4,
      title: "$2.337 USD+",
      description: "$2.337 USD+",
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
                <span>6,000+</span>
              </div>
              <div className="content-tow-bigdesktop-item-last">
                <span>STUDENTS SERVER IN ...</span>
              </div>
            </div>
            <div className="content-tow-bigdesktop-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="content-tow-bigdesktop-item">
              <div className="content-tow-bigdesktop-item-first">
                <span>100+</span>
              </div>
              <div className="content-tow-bigdesktop-item-last">
                <span>COUNTRIES ACROSS ...</span>
              </div>
            </div>
            <div className="content-tow-bigdesktop-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="content-tow-bigdesktop-item">
              <div className="content-tow-bigdesktop-item-first">
                <span>1,000+</span>
              </div>
              <div className="content-tow-bigdesktop-item-last">
                <span>NICHES WITH ...</span>
              </div>
            </div>
            <div className="content-tow-bigdesktop-icon">
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="content-tow-bigdesktop-item">
              <div className="content-tow-bigdesktop-item-first">
                <span>$2.337 USD+</span>
              </div>
              <div className="content-tow-bigdesktop-item-last">
                <span>$2.337 USD+</span>
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
