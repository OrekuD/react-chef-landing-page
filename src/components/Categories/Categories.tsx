import React from "react";
import "./Categories.scss";
import food from "../../assets/images/food.png";
import drink from "../../assets/images/drink.png";
import dessert from "../../assets/images/dessert.png";

const menuItems = [
  {
    label: "Food Items",
    image: food,
    description:
      "Find your favourite meal, eat what you love and save your time.",
  },
  {
    label: "Drink Items",
    image: drink,
    description:
      "Find your favourite meal, eat what you love and save your time.",
  },
  {
    label: "Dessert Items",
    image: dessert,
    description:
      "Find your favourite meal, eat what you love and save your time.",
  },
];

const Categories = () => (
  <div className="categories">
    <p className="small-label">Categories</p>
    <p className="large-label">Our Categories Menu</p>
    <div className="items">
      {menuItems.map(({ label, image, description }, index) => (
        <div className="item" key={index}>
          <img src={image} alt={label} />
          <p className="label">{label}</p>
          <p className="description-label">{description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Categories;
