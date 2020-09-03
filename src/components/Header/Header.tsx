import React from "react";
import "./Header.scss";
import { Bag, Search, Bell, Logo, Menu } from "../svg/Svgs";

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
