import React from "react";

import "./content_three.scss";

const ContentThree = () => {
  return (
    <div className="content-three-container">
      <div className="content-three-wrapper">
        <div className="content-three-first">
          <div className="content-three-item-first-wrapper">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/v_oUr0hbF9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                  Bạn tìm khóa học Tiếng anh cấp tốc?.
                  </span>
                </div>
              </div>
              <div className="content-three-body-item">
                <div className="content-three-body-item-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="content-three-body-item-text">
                  <span>
                  Bạn cần phương pháp học tập Tiếng anh hiệu quả?.
                  </span>
                </div>
              </div>
              <div className="content-three-body-item">
                <div className="content-three-body-item-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="content-three-body-item-text">
                  <span>
                  Bạn muốn giáo viên tâm huyết?
                  </span>
                </div>
              </div>
              <div className="contentthree-last-header">
                <h2>
                Đừng bỏ lỡ video này! <br></br>
                Don't miss out this opportunity which may change your life
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
