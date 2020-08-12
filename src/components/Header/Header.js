import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        <div className="logo">
          <span className="home">TodayNews</span>
        </div>
        <div className="menu">
          <span className="home">HOME</span>
          <span className="news">NEWS</span>
          <span className="contact">CONTACT</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
