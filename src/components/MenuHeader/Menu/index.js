import cn from "classnames";
import s from "./style.module.css";
import { Link } from "react-router-dom";

const MENU = [
  {
    title: "HOME",
    to: "",
  },
  {
    title: "GAME",
    to: "game",
  },
  {
    title: "ABOUT",
    to: "about",
  },
  {
    title: "CONTACT",
    to: "contact",
  },
];

const Menu = ({ isOpen, onClickLink }) => {
  const handleClickLink = () => {
    onClickLink && onClickLink();
  };
  return (
    <div
      className={cn(
        s.menuContainer,
        { [s.active]: isOpen === true },
        { [s.deactive]: isOpen === false }
      )}
    >
      <div className={s.overlay} />
      <div onClick={handleClickLink} className={s.menuItems}>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
