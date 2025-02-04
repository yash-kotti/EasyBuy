import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { removeAllItems } from "../Store/features/cart/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalPrice);
  // console.log(items);
  const dispatch = useDispatch();
  const handleCheckOut = () => {
    dispatch(removeAllItems());
  };
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasCart"
      aria-labelledby="offcanvasCartLabel"
    >
      <div className="order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Shopping cart</span>
          <span className="badge bg-primary rounded-pill">{items.length}</span>
        </h4>
        {items.length > 0 ? (
          <>
            <ul className="list-group mb-3">
              {items.map((item, index) => (
                <CartProduct key={index} item={item} />
              ))}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total.toFixed(2)}</strong>
              </li>
            </ul>

            <button
              className="btn btn-primary w-100"
              data-bs-toggle="modal"
              data-bs-target="#orderModal"
              onClick={handleCheckOut}
            >
              Checkout
            </button>
          </>
        ) : (
          <>
            <h6 style={{ textAlign: "center" }}>Your Cart is empty</h6>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
