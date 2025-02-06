import { Link } from "react-scroll";
import sc from "./MenuList.module.css";

export const MenuList = ({ isMenuOpen, menuItems, onCloseMenu, isMobile }) => {
  return (
    <ul className={`${sc.menu_list} ${isMobile && isMenuOpen ? sc.open : ""}`}>
      {menuItems.map((item) => (
        <li key={item.id} className={`${sc.menu_item} subtitle_2`}>
          <Link
            to={item.id}
            smooth={true}
            duration={200}
            delay={0}
            spy={true}
            activeClass={sc.active}
            offset={item.offset}
            onClick={onCloseMenu}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
