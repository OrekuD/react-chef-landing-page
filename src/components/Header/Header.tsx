import React from "react";
import "./Header.scss";
import { Bag, Search, Bell, Logo, Menu } from "../svg/Svgs";

const Header = () => (
  <header>
    <Logo size={120} />
    <div className="icons">
      <Search size={18} color="#252429" />
      <div className="bell">
        <Bell size={18} color="#252429" />
        <div className="badge">
          <p>4</p>
        </div>
      </div>
      <Bag size={18} color="#252429" />
      <Menu size={18} color="#252429" />
    </div>
  </header>
);

export default Header;
