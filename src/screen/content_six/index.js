import React, { useState } from "react";

import "./contentSix.scss";

const ContentSix = () => {
  const dataContent = [
    {
      video:
        "https://player.vimeo.com/video/574726851?h=fecfc30be5&title=0&byline=0&portrait=0",
      price: "“$2,500 in 2 weeks!”",
      des: "“Within two weeks of signing on the program, I signed on new clients and made 2,500 dollars. I would highly recommend that you invest in The BOSSGRAM Academy.”",
      author: "Cecilia Makinde, Mindset Coach",
    },
    {
      video:
        "https://player.vimeo.com/video/537600637?h=742510bb6a&title=0&byline=0&portrait=0",
      price: "“17 clients in just a few months.”",
      des: "“Within the past few months, I’ve been able to work with over ten clients. I knew that Vanessa would have great content, but I didn’t realize how rich it would be and how much it would change me as an entrepreneur.”",
      author: "Brian Hough, Business Coach",
    },
    {
      video:
        "https://player.vimeo.com/video/537037426?h=e296dfd1bc&title=0&byline=0&portrait=0",
      price: "“7k in my first month of business.”",
      des: "“Within three weeks of joining the BGA program, I not only made back my money, but I had a profit. I hit literally 7K within my first month of business! BGA’s investment is incredibly affordable for the results you gain.”",
      author: "Azia To, Business Coach",
    },
  ];

  const [indexData, setindexData] = useState(0);

  const handleClickNextContent = () => {
    if (dataContent.length === indexData + 1) {
      setindexData(0);
    } else {
      setindexData(indexData + 1);
    }
  };

  return (
    <div className="content-six-container">
      <div className="content-six-wrapper">
        <div className="content-six-header">
          <h2>Results speak louder than words:</h2>
        </div>
        <div className="content-six-body">
          <div className="content-six-body-list-item destop">
            <div className="content-six-body-item">
              <div className="content-six-body-item-header">
                <div className="content-six-body-item-header-video">
                  <iframe
                    src="https://player.vimeo.com/video/574726851?h=fecfc30be5&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="video"
                  ></iframe>
                </div>
                <div className="content-six-body-item-header-tittle">
                  <h2>“$2,500 in 2 weeks!”</h2>
                </div>
              </div>
              <div className="content-six-body-item-body">
                <div className="content-six-body-item-body-des">
                  <span>
                    “Within two weeks of signing on the program, I signed on new
                    clients and made 2,500 dollars. I would highly recommend
                    that you invest in The BOSSGRAM Academy.”
                  </span>
                </div>
                <div className="content-six-body-item-body-author">
                  <span>Cecilia Makinde, Mindset Coach</span>
                </div>
              </div>
            </div>
            <div className="content-six-body-item">
              <div className="content-six-body-item-header">
                <div className="content-six-body-item-header-video">
                  <iframe
                    src="https://player.vimeo.com/video/537600637?h=742510bb6a&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="video"
                  ></iframe>
                </div>
                <div className="content-six-body-item-header-tittle">
                  <h2>“17 clients in just a few months.”</h2>
                </div>
              </div>
              <div className="content-six-body-item-body">
                <div className="content-six-body-item-body-des">
                  <span>
                    “Within the past few months, I’ve been able to work with
                    over ten clients. I knew that Vanessa would have great
                    content, but I didn’t realize how rich it would be and how
                    much it would change me as an entrepreneur.”
                  </span>
                </div>
                <div className="content-six-body-item-body-author">
                  <span>Brian Hough, Business Coach</span>
                </div>
              </div>
            </div>
            <div className="content-six-body-item">
              <div className="content-six-body-item-header">
                <div className="content-six-body-item-header-video">
                  <iframe
                    src="https://player.vimeo.com/video/537037426?h=e296dfd1bc&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="video"
                  ></iframe>
                </div>
                <div className="content-six-body-item-header-tittle">
                  <h2>“7k in my first month of business.”</h2>
                </div>
              </div>
              <div className="content-six-body-item-body">
                <div className="content-six-body-item-body-des">
                  <span>
                    “Within three weeks of joining the BGA program, I not only
                    made back my money, but I had a profit. I hit literally 7K
                    within my first month of business! BGA’s investment is
                    incredibly affordable for the results you gain.”
                  </span>
                </div>
                <div className="content-six-body-item-body-author">
                  <span>Azia To, Business Coach</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-six-body-list-item mobile">
            <div className="content-six-body-item">
              <div className="content-six-body-item-header">
                <div className="content-six-body-item-header-video">
                  <iframe
                    src={dataContent[indexData].video}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="video"
                  ></iframe>
                </div>
                <div className="content-six-body-item-header-tittle">
                  <h2>{dataContent[indexData].price}</h2>
                </div>
              </div>
              <div className="content-six-body-item-body">
                <div className="content-six-body-item-body-des">
                  <span>{dataContent[indexData].des}</span>
                </div>
                <div className="content-six-body-item-body-author">
                  <span>{dataContent[indexData].author}</span>
                </div>
              </div>
            </div>
            <div className="content-six-body-item-mobile-next">
              <i
                className="fas fa-arrow-right"
                onClick={handleClickNextContent}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSix;
