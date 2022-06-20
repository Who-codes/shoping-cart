import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

export default function CartContainer() {
  const { cart, total, clearCart, loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <div className="animation">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
        <h2>Loading</h2>
      </div>
    );
  }
  return (
    <main>
      {cart.length !== 0 ? (
        <div className="cart-container">
          <h2>Your Cart</h2>
          <section className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </section>
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
