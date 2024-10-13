import css from "./Output.module.css";

type OutputProps = {
  qna: string;
};

export function Output(props: OutputProps): JSX.Element {
  return <div className={css.Container}>{props.qna}</div>;
}
