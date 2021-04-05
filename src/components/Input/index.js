import cn from "classnames";
import s from "./style.module.css";

const Input = ({ value, label, type = "text", name, onChange, required }) => {
  return (
    <div className={s.root}>
      <input
        name={name}
        value={value}
        type={type}
        className={cn(s.input, { [s.valid]: value !== "" })}
        required={required}
        onChange={onChange}
      />
      <span className={s.highlight}></span>
      <span className={s.bar}></span>
      <label className={s.label}>{label}</label>
    </div>
  );
};

export default Input;
