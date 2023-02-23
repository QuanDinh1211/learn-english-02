import React from "react";

import "./videoContentStyle.scss";

import Button from "../button";

const VideoContent = ({
  title,
  urlVideo,
  dataStars,
  dataDes,
  isbtn,
  index,
}) => {
  return (
    <div
      className={
        index % 2 === 0
          ? "videoContent-container"
          : "videoContent-container background-video"
      }
    >
      <div className="videoContent-wrapper">
        <div className="videoContent-header">
          {title && (
            <div className="videoContent-header-title">
              <h2>{title}</h2>
            </div>
          )}
        </div>
        <div className="videoContent-body">
          <div className="videoContent-body-video">
            <iframe
              width="100%"
              height="100%"
              src={urlVideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div className="videoContent-footer">
          {dataStars && dataStars.length > 0 && (
            <div className="videoContent-footer-list-item-icon">
              {dataStars.map((textStart, index) => {
                return (
                  <div key={index} className="videoContent-footer-item-icon">
                    <div className="videoContent-footer-item-icon-start">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="videoContent-footer-item-icon-text">
                      <span>{textStart}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {dataDes && dataDes.length > 0 && (
            <div className="videoContent-footer-list-item">
              {dataDes.map((desText, index) => {
                return (
                  <div key={index} className="videoContent-footer-item">
                    <span>{desText}</span>
                  </div>
                );
              })}
            </div>
          )}

          {isbtn && (
            <div className="videoContent-footer-btn">
              <div className="videoContent-footer-btn-item">
                <Button value="ĐĂNG KÝ NGAY!" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
