import { SyntheticEvent, useEffect, useState } from "react";
import css from "./Output.module.css";

type OutputProps = {
  qna: string;
};

export function Output(props: OutputProps): JSX.Element {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (!props.qna) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  }, [props.qna]);

  function toggleAnswer(args: SyntheticEvent) {
    const element = args.target as HTMLElement;

    if (element.nodeName !== "P") return;

    const answerP = element.parentNode?.lastChild as HTMLParagraphElement;

    answerP.style.display =
      answerP.style.display === "block" ? "none" : "block";
  }

  return (
    <div className={css.Container}>
      {message ? (
        <p className={css.Spinner}>
          <>
            The waiting time for the generate depends on the amount you
            inserted.
          </>
          <br />
          <>For the answer click on the question</>
        </p>
      ) : (
        <section
          onClick={toggleAnswer}
          className={css.Section}
          dangerouslySetInnerHTML={{ __html: props.qna }}
        ></section>
      )}
    </div>
  );
}
