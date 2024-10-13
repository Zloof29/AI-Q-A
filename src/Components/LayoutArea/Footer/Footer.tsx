import css from "./Footer.module.css";

export function Footer(): JSX.Element {
  return (
    <div className={css.Container}>
      <p className={css.Text}>Created by Lior Bas | All rights Reserved ©️</p>
    </div>
  );
}
