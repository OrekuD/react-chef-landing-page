import React from "react";
import "./Popular.scss";
import { ChevronRight, Star } from "../svg/Svgs";
import chicken from "../../assets/images/chicken.png";
import chocolate from "../../assets/images/chocolate.png";
import strawberry from "../../assets/images/strawberry.png";

const items = [
  {
    name: "Chicken Dish",
    price: 28.99,
    image: chicken,
    rating: 3,
  },
  {
    name: "Chocolate Brunch",
    price: 21.99,
    image: chocolate,
    rating: 4,
  },
  {
    name: "Strawberry Crunch",
    price: 27.99,
    image: strawberry,
    rating: 5,
  },
];

const orange = "#FFA50A";
const grey = "#C9C9C9";

const Popular = () => (
  <div className="popular">
    <p className="small-label">Popular Items</p>
    <p className="large-label">Some popular items</p>
    <div className="items">
      {items.map(({ image, name, price, rating }, index) => {
        const stars = [
          ...Array(rating).fill(orange),
          ...Array(5 - rating).fill(grey),
        ];
        return (
          <div className="item" key={index}>
            <img src={image} alt={name} />
            <p className="name">{name}</p>
            <p className="price">${price}</p>
            <div className="rating">
              {stars.map((starColor, index) => (
                <Star size={12} color={starColor} key={index} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
    <button className="main-btn" style={{ marginTop: 60 }}>
      <p>More Items</p>
      <div className="icon">
        <ChevronRight size={8} color="#fff" />
      </div>
    </button>
  </div>
);

export default Popular;
