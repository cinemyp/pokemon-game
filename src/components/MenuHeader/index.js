import { useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";

const MenuHeader = () => {
  const [isActive, setActive] = useState(false);
  const onClickButton = () => {
    console.log("click");
    setActive(!isActive);
  };

  return (
    <>
      <Menu isActive={isActive} />
      <Navbar onClickMenu={onClickButton} isActive={isActive} />
    </>
  );
};

export default MenuHeader;
