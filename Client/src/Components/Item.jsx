import { useDispatch } from "react-redux";
import { addItem } from "../Store/features/cart/cartSlice";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
  };

  return (
    <div
      className="card shadow p-3 mb-5 bg-body-tertiary rounded"
      style={{ width: "18rem", margin: "2rem" }}
    >
      <div className="card-body">
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
          SKU Name - {item.variantSKU}
        </small>
        <br />
        <strong>${item.variantPrice}</strong>

        {/* MUI Tooltip for better styling */}
        <Tooltip title={item.body} arrow placement="top">
          <p className={`card-text ${styles["truncated-text"]}`}>{item.body}</p>
        </Tooltip>

        <a className="btn btn-primary w-100" onClick={handleAddToCart}>
          Add To Cart
        </a>
      </div>
    </div>
  );
};

export default Item;
