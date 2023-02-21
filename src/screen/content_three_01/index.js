import React from "react";

import "./content_three.scss";

const ContentThree = () => {
  return (
    <div className="content-three-01-container">
      <div className="content-three-wrapper">
        <div className="content-three-first">
          <div className="content-three-item-first-wrapper">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/o_VWJ3s0sRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <div className="content-three-last">
          <div className="content-three-last-wrapper">
            <div className="content-three-last-body">
              <div className="content-three-body-item">
                <div className="content-three-body-item-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="content-three-body-item-text">
                  <span>
                  Cô Telesa là giáo viên Tiếng anh chuẩn TESOL, giàu kinh nghiệm.
                  </span>
                </div>
              </div>
              <div className="content-three-body-item">
                <div className="content-three-body-item-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="content-three-body-item-text">
                  <span>
                  Sẵn sàng mang đến cho bạn 1 điều DIỆU KỲ !!!.
                  </span>
                </div>
              </div>
              <div className="contentthree-last-header">
                <h2>
                Bạn có muốn biết là gì không?
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentThree;
