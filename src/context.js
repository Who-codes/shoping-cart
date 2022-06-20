import React, { useContext, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  cart: data,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
