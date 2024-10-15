import { SyntheticEvent } from "react";
import css from "./Output.module.css";

type OutputProps = {
  qna: string;
};

export function Output(props: OutputProps): JSX.Element {
  function test(args: SyntheticEvent) {
    const element = args.target as HTMLElement;

    if (element.nodeName !== "P") return;

    const answerP = element.parentNode?.lastChild as HTMLParagraphElement;

    answerP.style.display =
      answerP.style.display === "block" ? "none" : "block";
  }

  return (
    <div className={css.Container}>
      <section
        onClick={test}
        className={css.Section}
        dangerouslySetInnerHTML={{ __html: props.qna }}
      ></section>
    </div>
  );
}
