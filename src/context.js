import React, { useContext, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const defaultState = {
  cart: data,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  useContext(AppContext);
};

export { AppProvider, useGlobalContext };
