import { useState } from "react";
import { InterviewModel } from "../../../Models/InterviewModel";
import { Input } from "../Input/Input";
import { Output } from "../Output/Output";
import css from "./Main.module.css";
import { interviewService } from "../../../Services/InterviewService";

export function Main(): JSX.Element {
  const [completion, setCompletion] = useState<string>("");

  async function fetch(interview: InterviewModel) {
    try {
      const qna = await interviewService.getQNA(interview);
      setCompletion(qna);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div className={css.Container}>
      <Input generate={fetch} />
      <Output qna={completion} />
    </div>
  );
}
