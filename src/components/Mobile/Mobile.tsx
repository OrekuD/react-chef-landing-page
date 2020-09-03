import React from "react";
import "./Mobile.scss";
import background from "../../assets/images/background.png";
import phone from "../../assets/images/phone.png";
import appstore from "../../assets/images/app-store.png";
import playstore from "../../assets/images/play-store.png";

const Mobile = () => (
  <div className="mobile">
    <div className="image-container">
      <img src={background} alt="Background-image" className="background" />
      <img src={phone} alt="Mobile app" className="phone" />
    </div>
    <div className="content">
      <p className="small-label">Download App</p>
      <p className="large-label">Simple Way</p>
      <p className="large-label">To Order Food</p>
      <p className="description-label">
        Download the chef app and enjoy your favourite meal
      </p>
      <div className="links">
        <img src={appstore} alt="Link to app store" />
        <img src={playstore} alt="Link to play store" />
      </div>
    </div>
  </div>
);

export default Mobile;
