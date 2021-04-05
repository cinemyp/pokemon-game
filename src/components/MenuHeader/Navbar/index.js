import s from "./style.module.css";
import cn from "classnames";

import { ReactComponent as LoginSVG } from "../../../assets/login.svg";

const Navbar = ({ onClickMenu, bgActive = false, isOpen, onClickLogin }) => {
  return (
    <nav className={cn(s.root, { [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div className={s.loginAndMenu}>
          <div className={s.loginWrap} onClick={onClickLogin}>
            <LoginSVG />
          </div>
          <div
            onClick={onClickMenu}
            className={cn(s.menuButton, { [s.active]: isOpen })}
          >
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
