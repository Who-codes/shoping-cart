import React from "react";
import CartItem from "./CartItem";

export default function CartContainer() {
  return (
    <main>
      <div className="cart-container">
        <h2>Your Cart</h2>
        <CartItem />
        <button className="btn clear-btn">Clear List</button>
      </div>
    </main>
  );
}
