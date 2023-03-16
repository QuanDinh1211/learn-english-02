import React, { useState } from "react";

import "./contentSix.scss";

const ContentSix = () => {
  const dataContent = [
    {
      video:
        "https://www.youtube.com/embed/3Y8wLAT_JBU?autoplay=0&showinfo=0",
      price: "“$2,500 in 2 weeks!”",
      des: "“Within two weeks of signing on the program, I signed on new clients and made 2,500 dollars. I would highly recommend that you invest in The BOSSGRAM Academy.”",
      author: "Hanh, Sinh viên tốt nghiệp",
    },
    {
      video:
        "https://www.youtube.com/embed/mvKV3OeIUYw?autoplay=0&showinfo=0",
      price: "“17 clients in just a few months.”",
      des: "“Within the past few months, I’ve been able to work with over ten clients. I knew that Vanessa would have great content, but I didn’t realize how rich it would be and how much it would change me as an entrepreneur.”",
      author: "Ms Thi Lawyer",
    },
    {
      video:
        "https://www.youtube.com/embed/5kup0dezZIE?autoplay=0&showinfo=0",
      price: "“7k in my first month of business.”",
      des: "“Within three weeks of joining the BGA program, I not only made back my money, but I had a profit. I hit literally 7K within my first month of business! BGA’s investment is incredibly affordable for the results you gain.”",
      author: "Ms Quin Travel agent",
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
          <h2>Và học viên nói gì về cô Telesa ?</h2>
        </div>
        <div className="content-six-body">
          <div className="content-six-body-list-item destop">
            <div className="content-six-body-item">
              <div className="content-six-body-item-header">
                <div className="content-six-body-item-header-video">
                <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3Y8wLAT_JBU?autoplay=0&showinfo=0"
              title="YouTube video player"
              sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
                </div>
                <div className="content-six-body-item-header-tittle">
                  <h2>"Hanh, Sinh viên tốt nghiệp"</h2>
                </div>
              </div>
              
            </div>
            <div className="content-six-body-item">
              <div className="content-six-body-item-header">
                <div className="content-six-body-item-header-video">
                <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/mvKV3OeIUYw?autoplay=0&showinfo=0"
              title="YouTube video player"
              sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
                </div>
                <div className="content-six-body-item-header-tittle">
                  <h2>“Ms Thi Lawyer”</h2>
                </div>
              </div>
              
            </div>
            <div className="content-six-body-item">
              <div className="content-six-body-item-header">
                <div className="content-six-body-item-header-video">
                <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5kup0dezZIE?autoplay=0&showinfo=0"
              title="YouTube video player"
              sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
                </div>
                <div className="content-six-body-item-header-tittle">
                  <h2>“Ms Quin Travel agent”</h2>
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
                    sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    title="video"
                  ></iframe>
                </div>
              </div>
              <div className="content-six-body-item-body">
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
