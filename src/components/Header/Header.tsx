import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import bell from "../../assets/images/bell.png";
import menu from "../../assets/images/menu.png";
import bag from "../../assets/images/bag.png";
import { Bag, Search, Bell, Logo, Menu } from "../svg/Svgs";

const menuItems = [
  {
    icon: search,
    alt: "search",
  },
  {
    icon: bell,
    alt: "bell",
  },
  {
    icon: bag,
    alt: "bag",
  },
  {
    icon: menu,
    alt: "menu",
  },
];

const Header = () => (
  <header>
    <Logo size={120} />
    <div className="icons">
      <Search size={18} color="#252429" />
      <Bell size={18} color="#252429" />
      <Bag size={18} color="#252429" />
      <Menu size={18} color="#252429" />
    </div>
  </header>
);

export default Header;
