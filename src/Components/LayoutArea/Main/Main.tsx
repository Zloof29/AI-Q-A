import { useState } from "react";
import { InterviewModel } from "../../../Models/InterviewModel";
import { Input } from "../../InterviewArea/Input/Input";
import { Output } from "../../InterviewArea/Output/Output";
import css from "./Main.module.css";

export function Main(): JSX.Element {
  const [completion, setCompletion] = useState<string>("");

  function fetch(interview: InterviewModel) {
    setCompletion(
      interview.subject + " " + interview.level + " " + interview.count
    );
  }

  return (
    <div className={css.Container}>
      <Input generate={fetch} />
      <Output qna={completion} />
    </div>
  );
}
