import React from "react";
import LOGOTYPE from "../assets/icons/logo.svg";
import MENU from "../assets/icons/menu.svg";
import sc from "./Header.module.css";

const Header = () => {
  return (
    <header className={sc.header}>
      <div className={sc.header__logotype}>
        <img src={LOGOTYPE} alt="LOGOTYPE" />
      </div>

      <nav className={sc.header__actions}>
        <ul className={sc["header__actions-list"]}>
          <li className={`${sc["header__actions-item"]} ${sc.active}`}>Main</li>
          <li className={sc["header__actions-item"]}>About</li>
          <li className={sc["header__actions-item"]}>Get in touch</li>
        </ul>
        <div className={sc["header__menu-icon"]}>
          <img src={MENU} alt="Menu" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
