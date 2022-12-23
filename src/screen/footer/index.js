import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-item-first">
          <span>
            This site is not a part of the Facebook platform or Meta.
            Additionally, This site is NOT endorsed by Facebook in any way.
            FACEBOOK is a trademark of the Meta corporation.
          </span>
        </div>
        <div className="footer-item-last">
          <span>
            COPYRIGHT © 2022 • VANESSA LAU INTERNATIONAL INC • ALL RIGHTS
            RESERVED • TERMS & CONDITIONS
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
