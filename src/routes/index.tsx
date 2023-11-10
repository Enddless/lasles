import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ROUTES } from "../constants/routes";

import css from "../App.module.scss";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const AppRoutes = () => {
  const routeComponents = ROUTES.map(({ path, element }, key) => (
    <Route path={path} element={element} key={key} />
  ));

  return (
    <Router>
      <div className={css.container}>
        <Header />
        <Routes>{routeComponents}</Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
