import { useForm } from "react-hook-form";
import css from "./Input.module.css";
import { InterviewModel } from "../../../Models/InterviewModel";
import { Level } from "../../../Models/Level";

type InputProps = {
  generate: (interview: InterviewModel) => void;
};

export function Input(props: InputProps): JSX.Element {
  const { register, handleSubmit } = useForm<InterviewModel>();

  function send(interview: InterviewModel) {
    props.generate(interview);
  }

  return (
    <div className={css.Container}>
      <form className={css.Form} onSubmit={handleSubmit(send)}>
        <label className={css.Label}>Subject: </label>
        <input
          className={css.Input}
          type="text"
          {...register("subject")}
          required
        />

        <label className={css.Label}>Level: </label>
        <select className={css.Select} {...register("level")} required>
          <option value={Level.Beginner}>{Level.Beginner}</option>
          <option value={Level.Intermediate}>{Level.Intermediate}</option>
          <option value={Level.Expert}>{Level.Expert}</option>
        </select>

        <label className={css.Label}>Count: </label>
        <input
          className={css.Input}
          type="number"
          min={1}
          max={20}
          {...register("count")}
          required
        />

        <button className={css.Button}>Generate</button>
      </form>
    </div>
  );
}
