import { useContext, createContext } from "react";

interface IProps {
  isAuthenticated: boolean;
  userHasAuthenticated: (value: boolean) => void;
}

export const AppContext = createContext<IProps | undefined>(undefined);

export const useAppContext = () =>
  useContext(AppContext);

