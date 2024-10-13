import { Footer } from "../Footer/Footer";
import { Heder } from "../Heder/Heder";
import { Main } from "../Main/Main";
import "./Layout.css";

export function Layout(): JSX.Element {
  return (
    <div className="Layout">
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
