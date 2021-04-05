import { useState } from "react";
import Input from "../Input";

import s from "./style.module.css";

const LOGIN = "Log in?";
const REGISTER = "Register?";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("Register?");
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit &&
      onSubmit({
        email,
        password,
        auth: auth === REGISTER ? "log" : "reg",
      });
    clearInputs();
  };

  const onClickChangeAuth = () => {
    if (auth === REGISTER) setAuth(LOGIN);
    else if (auth === LOGIN) setAuth(REGISTER);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          label="Email"
          value={email}
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Input
          label="Password"
          value={password}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={s.wrap}>
        <button>{auth === REGISTER ? "SIGN IN" : "SIGN UP"}</button>
        <div className={s.auth} onClick={onClickChangeAuth}>
          {auth}
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
