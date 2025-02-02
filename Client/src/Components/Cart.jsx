import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { useState } from "react";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalPrice);
  console.log(items);

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasCart"
      aria-labelledby="offcanvasCartLabel"
    >
      <div className="order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">{items.length}</span>
        </h4>
        <ul className="list-group mb-3">
          {items.map((item, index) => (
            <CartProduct key={index} item={item} />
          ))}

          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${total}</strong>
          </li>
        </ul>
        <button className="w-100 btn btn-success btn-lg" type="submit">
          Checkout
        </button>

        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
      </div>
      <div className="modal-dialog modal-dialog-centered">Model</div>
    </div>
  );
};

export default Cart;
