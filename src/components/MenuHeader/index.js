import { useState } from "react";
import { NotificationManager } from "react-notifications";
import LoginForm from "../LoginForm";
import Modal from "../Modal";
import Menu from "./Menu";
import Navbar from "./Navbar";

const SIGNIN =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAEXrE9LEk_rTul8CBn4OjTbSBY2fRstI4";
const SIGNUP =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEXrE9LEk_rTul8CBn4OjTbSBY2fRstI4";

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const onClickHamburger = () => {
    setOpen((prevState) => !prevState);
  };
  const handleClickLogin = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleSubmitLoginForm = async ({ email, password, auth }) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    };
    const response = await fetch(
      auth === "reg" ? SIGNUP : SIGNIN,
      requestOptions
    ).then((res) => res.json());
    console.log("response", response);
    if (response.hasOwnProperty("error")) {
      NotificationManager.error(response.error.message, "Wrong!");
    } else {
      localStorage.setItem("idToken", response.idToken);
      NotificationManager.success("Success!");
    }
  };
  return (
    <>
      <Menu onClickLink={onClickHamburger} isOpen={isOpen} />
      <Navbar
        onClickMenu={onClickHamburger}
        bgActive={bgActive}
        isOpen={isOpen}
        onClickLogin={handleClickLogin}
      />
      <Modal isOpen={isOpenModal} title="Auth" onCloseModal={handleClickLogin}>
        <LoginForm onSubmit={handleSubmitLoginForm} />
      </Modal>
    </>
  );
};

export default MenuHeader;
