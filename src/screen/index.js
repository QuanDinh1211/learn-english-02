import React from "react";

import "./content.scss";
import ContentOne from "../screen/content_one";
import ContentTow from "../screen/content_tow";
import ContentThree from "../screen/content_three";
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
      <ContentFour />
      <ContentFive />
      <ContentSix />
      <ContentSevent />
      <ContentEight />
      <ContentNice />
      <Footer />
    </div>
  );
};

export default Content;
