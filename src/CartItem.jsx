import React from "react";
import data from "./data";

export default function CartItem() {
  return (
    <section className="cart-items">
      {data.map((item) => {
        const { id, title, price, img: image, amount } = item;
        return (
          <div className="list" key={id}>
            <img src={image} alt={title} />
            <div className="info">
              <h3 className="title">{title}</h3>
              <p className="price">${price}</p>
              <button className="btn remove-btn">remove</button>
            </div>
            <div className="amount-btn-container">
              <button className="btn amount-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                </svg>
              </button>
              <p className="amount">0</p>
              <button className="btn amount-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
