import { useContext } from "react";
import { LoggedUserContext } from "../context/LoggedUserContext";

export const useLoggedUser = () => {
  const context = useContext(LoggedUserContext);

  if (!context) {
    throw new Error("useLoggedUser must be used within a LoggedUserProvider");
  }

  return context;
};
