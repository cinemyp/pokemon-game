import s from "./style.module.css";

const Layout = ({ title, urlBg = "", colorBg, children }) => {
  let style;
  if (urlBg === "") style = { backgroundColor: colorBg };
  else style = { background: "url(" + urlBg + ")" };
  return (
    <section style={style} className={s.root}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={s.desc + " " + s.full}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
