import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { removeAllItems } from "../Store/features/cart/cartSlice";
import { Offcanvas } from "bootstrap";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleCheckOut = () => {
    dispatch(removeAllItems());
    const offcanvasElement = document.getElementById("offcanvasCart");
    const offcanvas = Offcanvas.getInstance(offcanvasElement);
    offcanvas.hide();
    // Remove any remaining backdrops
    // document.body.classList.remove("modal-open");
    // const backdrops = document.getElementsByClassName("offcanvas-backdrop");
    // while (backdrops.length > 0) {
    //   backdrops[0].remove();
    // }
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasCart"
      aria-labelledby="offcanvasCartLabel"
      style={{ width: "400px" }}
    >
      <div className="d-flex flex-column h-100">
        <div className="p-4">
          <h4 className="d-flex justify-content-between align-items-center mb-4">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{ transform: "scale(0.8)" }}
            ></button>
            <span className="text-primary fw-bold">Your shopping cart</span>
            <span className="badge bg-primary rounded-pill">
              {items.length}
            </span>
          </h4>
        </div>

        {items.length > 0 ? (
          <>
            <div
              className="flex-grow-1 overflow-auto px-4"
              style={{ maxHeight: "calc(100vh - 250px)" }}
            >
              <ul className="list-group mb-4 shadow-sm">
                {items.map((item, index) => (
                  <CartProduct key={index} item={item} />
                ))}
              </ul>
            </div>

            <div className="p-4 mt-auto border-top">
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total (USD)</span>
                <strong className="text-primary">${total.toFixed(2)}</strong>
              </div>
              <button
                className="btn btn-primary w-100 py-2 shadow-sm"
                data-bs-toggle="modal"
                data-bs-target="#orderModal"
                onClick={() => {
                  handleCheckOut();
                }}
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-5">
            <h6 className="text-muted">Your Cart is empty</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
