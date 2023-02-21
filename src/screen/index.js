import React from "react";

import "./content.scss";
import ContentOne from "../screen/content_one";
import ContentTow from "../screen/content_tow";
import ContentThree from "../screen/content_three";
import ContentThree01 from "../screen/content_three_01";
import ContentThree02 from "../screen/content_three_02";
import ContentThree03 from "../screen/content_three_03";
import ContentThree04 from "../screen/content_three_04";
import ContentThree05 from "../screen/content_three_05";
import ContentThree06 from "../screen/content_three_06";
import ContentFour from "../screen/content_four";
import ContentFive from "../screen/content_five";
import ContentSix from "../screen/content_six";
import ContentSevent from "../screen/content_sevent";
import ContentEight from "../screen/content_eight";
import ContentNice from "../screen/content_nice";
import Footer from "../screen/footer";

const Content = () => {
  return (
    <div className="content-container">
      <ContentOne />
      <ContentTow />
      <ContentThree />
      <ContentThree01 />
      <ContentThree02 />
      <ContentThree03 />
      <ContentThree04 />
      <ContentThree05 />
      <ContentThree06 />
      <ContentFour />
      <ContentFive />
      <ContentSix />
      <ContentEight />
      <Footer />
    </div>
  );
};

export default Content;
