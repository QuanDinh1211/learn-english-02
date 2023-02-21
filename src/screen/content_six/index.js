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
          <h2>Và học viên nói gì về cô Telesa ?</h2>
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
                  <h2>Linda Nguyen</h2>
                </div>
              </div>
              <div className="content-six-body-item-body">
                <div className="content-six-body-item-body-des">
                  <span>
                    “Giáo viên nhiệt tình, nhiều tâm huyết . 
                    với tôi là người mù tiếng anh và luôn xếp nhất lớp từ dưới lên bây giờ tôi có thể tự tin nói chuyện với boyfriend . 
                    cảm ơn ms rất nhiều với sự chú đáo , nhiệt tình,và kiên nhẫn dành cho tôi.thank you very much”
                  </span>
                </div>
                <div className="content-six-body-item-body-author">
                  <span>Đang sinh sống và làm việc ở nước ngoài</span>
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
                  <h2>“Thanh Nguyên”</h2>
                </div>
              </div>
              <div className="content-six-body-item-body">
                <div className="content-six-body-item-body-des">
                  <span>
                    “Cô giáo vui lắm lắm luôn í, rất nhiệt tình. Mình tự nhận mình là một đứa không có năng khiếu học tiếng anh ấy, học chậm, 
                    hay quên, đọc sai tè le vậy mà từ khi học cô, cô tận tình chỉ cho từng chút, cô rất kiên nhẫn với mình, 
                    hay động viên và gọi điện chỉ riêng cho mình những lỗi sai hay củng cố lại kiến thức mà trên lớp mình theo không kịp..”
                  </span>
                </div>
                <div className="content-six-body-item-body-author">
                  <span>Nhân viên bán hàng</span>
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
                  <h2>“QUin Huỳnh”</h2>
                </div>
              </div>
              <div className="content-six-body-item-body">
                <div className="content-six-body-item-body-des">
                  <span>
                    “Telesa is my English teacher, her class always is full of energy, she usually asks us to present the topic to correct our Pronunciation, 
                    Grammar and gives us the Feedback each 10 sections.That action helps us improve our weaknesses and become more confident to speak.”
                  </span>
                </div>
                <div className="content-six-body-item-body-author">
                  <span>Đại lý du lịch</span>
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
