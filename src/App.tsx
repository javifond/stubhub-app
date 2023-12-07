import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { APP_ROUTES } from "./routes/routes.constants";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";

import "./App.module.scss";

function Routes() {
  const element = useRoutes([{ path: APP_ROUTES.HOME, element: <HomePage /> }]);

  return element;
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes />
      </Router>
    </>
  );
}

export default App;
