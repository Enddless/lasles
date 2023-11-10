import css from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

import { ModalState } from "./context/modalcontext";


function App() {


  return (
    <ModalState>
      <div className={css.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </ModalState>
  );
}

export default App;
