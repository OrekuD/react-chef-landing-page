import React from "react";
import "./About.scss";
import history from "../../assets/images/history.png";
import discover from "../../assets/images/discover.png";
import { ChevronRight } from "../svg/Svgs";

const items = [
  {
    title: "Our History",
    label: "Discover Our Glory Beginning",
    image: history,
    description:
      "We promise you'll enjoy every sweet moment to find your favourite, eat what you love and save your time.",
  },
  {
    title: "Restaurant Food",
    label: "Discover Our Special Recipes",
    image: discover,
    description:
      "We promise you'll enjoy every sweet moment to find your favourite, eat what you love and save your time.",
  },
];

const About = () => (
  <div className="about">
    {items.map(({ title, label, image, description }, index) => (
      <div className="item" key={index}>
        <img src={image} alt="title" />
        <div className="content">
          <p className="small-label">{title}</p>
          <p className="large-label">{label}</p>
          <p className="description-label">{description}</p>
          <button className="main-btn">
            <p>Learn More</p>
            <div className="icon">
              <ChevronRight size={8} color="#fff" />
            </div>
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default About;
