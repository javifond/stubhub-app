import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "./routes.constants";

type ProtectedRouteProps = {
  user: number | null;
  children: ReactElement | ReactElement[];
};
export const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to={APP_ROUTES.HOME} replace />;
  }

  return children;
};
