import { Footer } from "../Footer/Footer";
import { Heder } from "../Heder/Heder";
import { Main } from "../Main/Main";
import css from "./Layout.module.css";

export function Layout(): JSX.Element {
  return (
    <div className={css.Container}>
      <header>
        <Heder />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
