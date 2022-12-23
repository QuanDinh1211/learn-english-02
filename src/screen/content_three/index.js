import React from "react";

import "./content_three.scss";

const ContentThree = () => {
  return (
    <div className="content-three-container">
      <div className="content-three-wrapper">
        <div className="content-three-first">
          <div className="content-three-item-first-wrapper">
            <iframe
              src="https://player.vimeo.com/video/606037153?h=3710aa4105"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="video"
            ></iframe>
          </div>
        </div>
        <div className="content-three-last">
          <div className="content-three-last-wrapper">
            <div className="contentthree-last-header">
              <h2>
                You’re in the right place at the right moment because you know…
              </h2>
            </div>
            <div className="content-three-last-body">
              <div className="content-three-body-item">
                <div className="content-three-body-item-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="content-three-body-item-text">
                  <span>
                    You want to step off the content creation hamster wheel
                    without compromising your consistency and engagement.
                  </span>
                </div>
              </div>
              <div className="content-three-body-item">
                <div className="content-three-body-item-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="content-three-body-item-text">
                  <span>
                    You struggle with attracting AND converting your followers
                    into paying clients because they can’t see how you can help
                    them.
                  </span>
                </div>
              </div>
              <div className="content-three-body-item">
                <div className="content-three-body-item-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="content-three-body-item-text">
                  <span>
                    You're tired of only getting ONE piece of the puzzle of how
                    to monetize your creation, and you're sick of doubling your
                    work just to fill in the missing gaps.
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

export default ContentThree;
