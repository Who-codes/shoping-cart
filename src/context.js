import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  cart: [],
  loading: false,
  amount: 0,
  total: 0,
};

const url = "https://course-api.com/react-useReducer-cart-project";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { type, id } });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: "DISPLAY_CART", cart: data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, toggleAmount }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
