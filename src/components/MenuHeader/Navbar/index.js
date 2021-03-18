import s from "./style.module.css";
import cn from "classnames";

const Navbar = ({ onClickMenu, isActive }) => {
  const handleClick = () => {
    onClickMenu && onClickMenu();
  };
  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          onClick={handleClick}
          className={cn(s.menuButton, { [s.active]: isActive })}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
