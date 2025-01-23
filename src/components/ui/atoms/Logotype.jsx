import { Link } from "react-scroll";
import { Logo } from "./Icons";
import sc from "./Logotype.module.css";

export const Logotype = ({ onClick }) => {
  return (
    <div className={sc.logotype} onClick={onClick}>
      <Link to="/" smooth={true} duration={200} offset={-70}>
        <Logo />
      </Link>
    </div>
  );
};
