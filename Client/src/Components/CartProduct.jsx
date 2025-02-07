import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem } from "../Store/features/cart/cartSlice";
import Styles from "./CartProduct.module.css";
import { useRef, useEffect } from "react";
import { Toast } from "bootstrap";

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();
  const toastRef = useRef(null);

  useEffect(() => {
    const toast = new Toast(toastRef.current);
    toastRef.current.toast = toast;
  }, []);

  const handleDeleteCartClick = () => {
    // Show toast first
    toastRef.current.toast.show();

    // Remove item after a brief delay
    setTimeout(() => {
      dispatch(removeItem(item));
    }, 400);
  };

  return (
    <div className="position-relative">
      <li className="list-group-item d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center" style={{ width: "70%" }}>
          <div className="me-3">
            <img
              src={item.imageSrc}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "placeholder.png";
              }}
              alt="Product Image"
            />
          </div>
          <div>
            <h6 className="my-0 text-truncate" style={{ maxWidth: "150px" }}>
              {item.title}
            </h6>
            <small className="text-muted">
              {item.quantity} x ${item.variantPrice}
            </small>
          </div>
        </div>

        <MdDelete
          onClick={() => {
            handleDeleteCartClick();
          }}
          color="red"
          size={20}
          className={`${Styles["delete-icon"]} cursor-pointer`}
          style={{ cursor: "pointer" }}
        />
      </li>

      <div
        className="toast-container position-fixed top-0 start-50 translate-middle-x p-3"
        style={{ zIndex: 1500 }}
      >
        <div
          ref={toastRef}
          className="toast align-items-center text-bg-danger border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              {item.title} removed from cart successfully!
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
