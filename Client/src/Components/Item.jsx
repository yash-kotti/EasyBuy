import { useDispatch } from "react-redux";
import { addItem } from "../Store/features/cart/cartSlice";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Item.module.css";
import { useEffect, useRef } from "react";
import { Toast } from "bootstrap";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const toastRef = useRef(null);

  useEffect(() => {
    // Initialize toast
    const toast = new Toast(toastRef.current);
    toastRef.current.toast = toast;
  }, []);

  const handleAddToCart = () => {
    dispatch(addItem(item));
    // Show toast
    toastRef.current.toast.show();
  };

  return (
    <>
      <div
        className="card shadow p-3 mb-5 bg-body-tertiary rounded"
        style={{
          width: "18rem",
          margin: "2rem",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        }}
      >
        <div
          className="card-body d-flex flex-column"
          style={{ minHeight: "400px" }}
        >
          <div>
            <h6 className="card-title">{item.title}</h6>
            <img
              src={item.imageSrc}
              className="card-img-top img-fluid"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "placeholder.png";
              }}
              alt="Product Image"
            />
            <small className="text-body-secondary">
              SKU - {item.variantSKU}
            </small>
            <br />
            <strong>${item.variantPrice}</strong>

            <Tooltip title={item.body} arrow placement="top">
              <p className={`card-text ${styles["truncated-text"]}`}>
                {item.body}
              </p>
            </Tooltip>
          </div>

          <a
            className="btn btn-primary w-100 mt-auto"
            onClick={() => {
              handleAddToCart();
            }}
          >
            Add To Cart
          </a>
        </div>
      </div>

      <div className="toast-container position-fixed top-1 start-50 translate-middle p-3">
        <div
          ref={toastRef}
          className="toast align-items-center text-bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              {item.title} added to cart successfully!
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
    </>
  );
};
export default Item;
