import { createContext, useState, ReactElement } from "react";

type LoggedUserContextProps = {
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
};

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const LoggedUserContext = createContext<
  LoggedUserContextProps | undefined
>(undefined);

export const LoggedUserProvider = ({ children }: ChildrenType) => {
  const [userId, setUserId] = useState<number | null>(null);

  const contextValue: LoggedUserContextProps = {
    userId,
    setUserId,
  };

  return (
    <LoggedUserContext.Provider value={contextValue}>
      {children}
    </LoggedUserContext.Provider>
  );
};
