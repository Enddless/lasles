import css from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

import { ModalState } from "./context/modalcontext";
import AppRoutes from "./routes";


function App() {


  return (
    <ModalState>
      <AppRoutes />
    </ModalState>
  );
}

export default App;
