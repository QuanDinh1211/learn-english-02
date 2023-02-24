import React from "react";

import "./content.scss";
import ContentOne from "../screen/content_one";
import ContentTow from "../screen/content_tow";
import ContentFour from "../screen/content_four";
import ContentFive from "../screen/content_five";
import ContentSix from "../screen/content_six";
import ContentEight from "../screen/content_eight";
import Footer from "../screen/footer";
import VideoContent from "../components/layout/VideoContent";

const Content = () => {
  const dataSectionVideos = {
    section_1: {
      title: "",
      urlVideo: "https://www.youtube.com/embed/v_oUr0hbF9I",
      dataStars: [
        "Bạn tìm khóa học Tiếng anh cấp tốc?",
        "Bạn cần phương pháp học tập Tiếng anh hiệu quả?",
        "Bạn muốn giáo viên tâm huyết?",
      ],
      dataDes: [
        "Đừng bỏ lỡ video này!",
        "Don't miss out this opportunity which may change your life",
      ],
      isbtn: false,
    },
    section_2: {
      title: "Tôi là ai?",
      urlVideo: "https://www.youtube.com/embed/o_VWJ3s0sRI",
      dataStars: [],
      dataDes: [
        "Cô Telesa là giáo viên Tiếng anh chuẩn TESOL, giàu kinh nghiệm",
        "Sẵn sàng mang đến cho bạn 1 điều DIỆU KỲ !!!",
        "Bạn có muốn biết là gì không?",
      ],
      isbtn: false,
    },
    section_3: {
      title:
        "Tại sao bạn chưa nói được tiếng anh sau nhiều năm học ở trung tâm ?",
      urlVideo: "https://www.youtube.com/embed/dH5SzOMbYw8",
      dataStars: [
        "Tại bạn chưa đủ quyết tâm?",
        " chưa tìm được phương pháp phù hợp?",
        " Nội dung giáo trình thiếu tính ứng dụng thực tế?",
        " Chưa gặp được giáo viên có chuyên môn và kinh nghiệm?",
      ],
      dataDes: [],
      isbtn: false,
    },
    section_4: {
      title: "Cô Telesa làm gì để giúp học viên nói được tiếng Anh?",
      urlVideo: "https://www.youtube.com/embed/X-bPcOlthp8",
      dataStars: [],
      dataDes: [],
      isbtn: true,
    },
    section_5: {
      title: "Làm cách nào cô có thể làm được vậy?",
      urlVideo: "https://www.youtube.com/embed/ojQmwVVL7Sk",
      dataStars: [
        "Nói được tiếng Anh trong 3 tháng?",
        "Cho người bắt đầu từ số 0?",
        "Cho người mất gốc?",
        "Cho người bận rộn?",
        "Cho người hay quên?",
      ],
      dataDes: [
        "Bao gồm: 252 clips - bài tập - nhóm học - ghi hình - ghi âm - chỉnh sửa  - 3 tháng - 90 ngày",
      ],
      isbtn: false,
    },
    section_6: {
      title: "Học viên nói gì về cô Telesa?",
      urlVideo: "https://www.youtube.com/embed/IzHB6C5c0K8",
      dataStars: [],
      dataDes: ["Những người mà cô Telesa đã giúp đỡ và cộng tác"],
      isbtn: true,
    },
    section_7: {
      title: "Đừng bỏ lỡ cơ hội này!",
      urlVideo: "https://www.youtube.com/embed/QEDd1dm6EE4",
      dataStars: [],
      dataDes: [],
      isbtn: true,
    },
  };

  return (
    <div className="content-container">
      <ContentOne />
      <ContentTow />
      {Object.values(dataSectionVideos).map((section, index) => {
        const { title, urlVideo, dataStars, dataDes, isbtn } = section;
        return (
          <VideoContent
            title={title}
            urlVideo={urlVideo}
            dataStars={dataStars}
            dataDes={dataDes}
            isbtn={isbtn}
            key={index}
            index={index}
          />
        );
      })}
      <ContentFour />
      <ContentFive />
      <ContentSix />
      <ContentEight />
      <Footer />
    </div>
  );
};

export default Content;
