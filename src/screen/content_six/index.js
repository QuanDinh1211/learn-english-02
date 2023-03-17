import React from "react";

import "./contentSix.scss";

const ContentSix = () => {
  const dataContent = [
    {
      video: "https://www.youtube.com/embed/3Y8wLAT_JBU?autoplay=0&showinfo=0",
      price: "“$2,500 in 2 weeks!”",
      des: "“Giáo viên nhiệt tình, nhiều tâm huyết . với tôi là người mù tiếng anh và luôn xếp nhất lớp từ dưới lên bây giờ tôi có thể tự tin nói chuyện với boyfriend . cảm ơn ms rất nhiều với sự chú đáo , nhiệt tình,và kiên nhẫn dành cho tôi.thank you very much.”",
      author: "Hanh, Sinh viên tốt nghiệp",
    },
    {
      video: "https://www.youtube.com/embed/mvKV3OeIUYw?autoplay=0&showinfo=0",
      price: "“17 clients in just a few months.”",
      des: "“Nhờ có khoá học này mà tôi cải thiện đáng kể về phát âm của mình. Cô giáo rất nhiệt tình chu đáo, hướng dẫn tỉ mỉ cách phát âm. Thank you very much “Telesa English Center.”",
      author: "Ms Thi Lawyer",
    },
    {
      video: "https://www.youtube.com/embed/5kup0dezZIE?autoplay=0&showinfo=0",
      price: "“7k in my first month of business.”",
      des: "“Lớp học cực kỳ vui nhộn và tràn đầy năng lượng. Cô hướng dẫn rất nhiệt tình chỉnh sửa từng lỗi nhỏ giúp em tiến bộ nhanh chóng. Hệ thống flash card rất hay có thể học ở bất cứ đâu giúp việc nhớ từ vựng trở nên rất dễ dàng. Các bài học được chia theo chủ để rất gần gũi với cuộc sống hàng ngày. Thanks Telesa English Center.”",
      author: "Ms Quin Travel agent",
    },
  ];

  return (
    <div className="content-six-container">
      <div className="content-six-wrapper">
        <div className="content-six-header">
          <h2>Và học viên nói gì về cô Telesa ?</h2>
        </div>
        <div className="content-six-body">
          <div className="content-six-body-list-item destop">
            {dataContent.map((feedback, index) => {
              return (
                <div key={index} className="content-six-body-item">
                  <div className="content-six-body-item-header">
                    <div className="content-six-body-item-header-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={feedback.video}
                        title="YouTube video player"
                        sandbox="allow-presentation allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div className="content-six-body-item-header-tittle">
                      <h2>{`"${feedback.author}"`}</h2>
                    </div>
                  </div>
                  <div className="content-six-body-item-body">
                    <div className="content-six-body-item-body-des">
                      <span>{feedback.des}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSix;
