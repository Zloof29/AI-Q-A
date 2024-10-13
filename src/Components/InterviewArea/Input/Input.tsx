import { useForm } from "react-hook-form";
import "./Input.css";
import { InterviewModel } from "../../../Models/InterviewModel";
import { Level } from "../../../Models/Level";

export function Input(): JSX.Element {
  const { register, handleSubmit } = useForm<InterviewModel>();

  function send(interview: InterviewModel) {}

  return (
    <div className="Input">
      <form>
        <label>Subject: </label>
        <input type="text" {...register("subject")} required />

        <label>Level: </label>
        <select {...register("level")} required>
          <option>{Level.Beginner}</option>
          <option>{Level.Intermediate}</option>
          <option>{Level.Expert}</option>
        </select>

        <label>Count: </label>
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
