import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

export default function CartContainer() {
  const { cart, total, clearCart } = useGlobalContext();
  return (
    <main>
      {cart.length !== 0 ? (
        <div className="cart-container">
          <h2>Your Cart</h2>
          <CartItem cart={cart} />
          <div className="total-container">
            <hr />
            <div className="total-content">
              <p>Total</p>
              <p className="total">${total}</p>
            </div>
          </div>
          <button className="btn clear-btn" onClick={clearCart}>
            Clear List
          </button>
        </div>
      ) : (
        <div className="cart-container">
          <h2>Your Cart</h2>
          <h3 className="empty">Empty Cart</h3>
        </div>
      )}
    </main>
  );
}
