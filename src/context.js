import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  <AppContext.Provider>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  useContext(AppContext);
};

export { AppProvider, useGlobalContext };
