import { useForm } from "react-hook-form";
import css from "./Input.module.css";
import { InterviewModel } from "../../../Models/InterviewModel";
import { Level } from "../../../Models/Level";

export function Input(): JSX.Element {
  const { register, handleSubmit } = useForm<InterviewModel>();

  function send(interview: InterviewModel) {
    console.log(interview);
  }

  return (
    <div className={css.Container}>
      <form className={css.Form} onSubmit={handleSubmit(send)}>
        <label className={css.Label}>Subject: </label>
        <input type="text" {...register("subject")} required />

        <label className={css.Label}>Level: </label>
        <select {...register("level")} required>
          <option selected>{Level.Beginner}</option>
          <option>{Level.Intermediate}</option>
          <option>{Level.Expert}</option>
        </select>

        <label className={css.Label}>Count: </label>
        <input
          type="number"
          min={1}
          max={20}
          value={5}
          {...register("count")}
          required
        />

        <button>Generate</button>
      </form>
    </div>
  );
}
