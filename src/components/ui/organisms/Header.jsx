import React, { useState } from "react";
import { Logotype } from "../atoms/Logotype";
import { Menu, MenuCross } from "../atoms/Icons";
import { MenuList } from "../atoms/MenuList";
import sc from "./Header.module.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: "/", label: "Main", offset: -70 },
    { id: "about", label: "About", offset: -65 },
    { id: "form", label: "Get in touch", offset: -165 },
  ];

  return (
    <div className={sc.header_container}>
      <header className={sc.header}>
        <Logotype />
        <nav className={sc.header__actions}>
          <div
            className={sc.menu_icon}
            onClick={toggleMenu}
            onBlur={closeMenu}
            tabIndex={0}
          >
            {isMenuOpen ? (
              <MenuCross className={sc.icon} />
            ) : (
              <Menu className={sc.icon} />
            )}
          </div>
          <MenuList
            isMenuOpen={isMenuOpen}
            menuItems={menuItems}
            onCloseMenu={closeMenu}
          />
        </nav>
      </header>
    </div>
  );
};

export default Header;
