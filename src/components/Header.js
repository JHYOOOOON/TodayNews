import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        <div className="logo">
          <span>TodayNews</span>
        </div>
        <div className="menu">
          <span>
            <a href="#">HOME</a>
          </span>
          <span>
            <a href="#">NEWS</a>
          </span>
          <span>
            <a href="#">CONTACT</a>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
