import { Input } from "../../InterviewArea/Input/Input";
import css from "./Main.module.css";

export function Main(): JSX.Element {
  return (
    <div className={css.Container}>
      <Input />
    </div>
  );
}
