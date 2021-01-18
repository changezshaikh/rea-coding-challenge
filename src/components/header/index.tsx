import React from "react";
import reaLogo from "../../assets/images/rea-logo.png";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="l-padding">
          <img src={reaLogo} alt="realestate.com.au Australia lives here" />
        </div>
      </div>
    </header>
  );
};

export default Header;
