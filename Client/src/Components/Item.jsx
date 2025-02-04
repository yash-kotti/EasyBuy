import { useDispatch } from "react-redux";
import { addItem } from "../Store/features/cart/cartSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(item));
  };
  return (
    <>
      <div
        className="card shadow p-3 mb-5 bg-body-tertiary rounded"
        style={{ width: "18rem", margin: "2rem" }}
      >
        <div className="card-body">
          <h6 className="card-title">{item["Title"]}</h6>
          <img
            src={item["Image Src"]}
            className="card-img-top img-fluid"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "placeholder.png";
            }}
            alt="Product Image"
          />
          <small className="text-body-secondary">
            SKU Name - {item["Variant SKU"]}
          </small>
          <br />
          <strong>${item["Variant Price"]}</strong>
          <p className="card-text truncate-text fs-6">{item["Body"]}</p>
          <a className="btn btn-primary w-100" onClick={handleAddToCart}>
            Add To Cart
          </a>
        </div>
      </div>
    </>
  );
};
export default Item;
