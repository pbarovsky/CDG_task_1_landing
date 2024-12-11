// import React from "react";
// import LOGOTYPE from "../assets/icons/logo.svg";
// import MENU from "../assets/icons/menu.svg";
// import sc from "./Header.module.css";

// const Header = () => {
//   return (
//     <header className={sc.header}>
//       <div className={sc.header__logotype}>
//         <img src={LOGOTYPE} alt="LOGOTYPE" />
//       </div>

//       <nav className={sc.header__actions}>
//         <ul className={sc["header__actions-list"]}>
//           <li className={`${sc["header__actions-item"]} ${sc.active}`}>Main</li>
//           <li className={sc["header__actions-item"]}>About</li>
//           <li className={sc["header__actions-item"]}>Get in touch</li>
//         </ul>
//         <div className={sc["header__menu-icon"]}>
//           <img src={MENU} alt="Menu" />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;




import React, { useState } from "react";
import LOGOTYPE from "../assets/icons/logo.svg";
import MENU from "../assets/icons/menu.svg";
import sc from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={sc.header}>
      <div className={sc.header__logotype}>
        <img src={LOGOTYPE} alt="LOGOTYPE" />
      </div>

      <nav className={sc.header__actions}>
        {/* Бургер-меню */}
        <div className={sc.header__menu_icon} onClick={toggleMenu}>
          <img src={MENU} alt="Menu Icon" />
        </div>

        {/* Список меню */}
        <ul
          className={`${sc.header__actions_list} ${
            isMenuOpen ? sc.open : ""
          }`}
        >
          <li className={`${sc.header__actions_item} ${sc.active}`}>Main</li>
          <li className={sc.header__actions_item}>About</li>
          <li className={sc.header__actions_item}>Get in touch</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
