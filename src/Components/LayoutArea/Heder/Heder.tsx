import css from "./Heder.module.css";

export function Heder(): JSX.Element {
  return (
    <div className={css.Container}>
      <h1 className={css.Title}>🤖 AI Job Interview Questions</h1>
    </div>
  );
}
