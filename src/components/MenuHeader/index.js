import { useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);

  const onClickHamburger = () => {
    console.log("click");
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Menu onClickLink={onClickHamburger} isOpen={isOpen} />
      <Navbar
        onClickMenu={onClickHamburger}
        bgActive={bgActive}
        isOpen={isOpen}
      />
    </>
  );
};

export default MenuHeader;
