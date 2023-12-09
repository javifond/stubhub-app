import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { APP_ROUTES } from "./routes/routes.constants";
import { FetchCategoriesProvider } from "./context/FetchCategoriesContext";
import { LoggedUserProvider } from "./context/LoggedUserContext";
import { useLoggedUser } from "./hooks/useLoggedUser";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Footer from "./components/Footer/Footer";
import EventPage from "./pages/EventPage/EventPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";

import "./App.module.scss";

function Routes() {
  const { userId } = useLoggedUser();

  const element = useRoutes([
    { path: APP_ROUTES.HOME, element: <HomePage /> },
    { path: APP_ROUTES.CATEGORIES, element: <CategoryPage /> },
    { path: APP_ROUTES.TICKETS, element: <EventPage /> },
    {
      path: APP_ROUTES.ACCOUNT,
      element: (
        <ProtectedRoute userId={userId}>
          <AccountPage />
        </ProtectedRoute>
      ),
    },
    { path: APP_ROUTES.NOT_FOUND, element: <ErrorPage /> },
  ]);

  return element;
}

function App() {
  return (
    <LoggedUserProvider>
      <Router>
        <Header />
        <FetchCategoriesProvider>
          <Routes />
        </FetchCategoriesProvider>
        <Footer />
      </Router>
    </LoggedUserProvider>
  );
}

export default App;
