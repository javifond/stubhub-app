import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "./routes.constants";

type ProtectedRouteProps = {
  userId: number | null;
  children: ReactElement | ReactElement[];
};
export const ProtectedRoute = ({ userId, children }: ProtectedRouteProps) => {
  if (!userId) {
    return <Navigate to={APP_ROUTES.HOME} replace />;
  }

  return children;
};
