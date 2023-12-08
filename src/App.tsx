import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { APP_ROUTES } from "./routes/routes.constants";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Footer from "./components/Footer/Footer";

import "./App.module.scss";

function Routes() {
  const element = useRoutes([
    { path: APP_ROUTES.HOME, element: <HomePage /> },
    { path: APP_ROUTES.CATEGORIES, element: <CategoryPage /> },
  ]);

  return element;
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
