import React from "react";
import "./Banner.scss";
import chef from "../../assets/images/chef.png";
import { ChevronRight, Play } from "../svg/Svgs";

const Banner = () => (
  <div className="banner">
    <div className="content">
      <p className="title">Order Your</p>
      <p className="title">Favourite Meal</p>
      <p className="description-label">
        We promise you'll enjoy every sweet moment to find your favourite. Eat
        what you love and save your time.
      </p>

      <div className="row">
        <button className="main-btn">
          <p>Place an order</p>
          <div className="icon">
            <ChevronRight size={8} color="#fff" />
          </div>
        </button>
        <button className="play-button">
          <div>
            <Play size={12} color="#fff" />
          </div>
        </button>
      </div>
    </div>
    <img src={chef} alt="Chef" className="chef" />
  </div>
);

export default Banner;
