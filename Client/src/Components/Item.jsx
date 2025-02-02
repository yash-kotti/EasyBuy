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
        <img
          src={item["Image Src"]}
          className="card-img-top img-fluid"
          alt="./assets/placeholder.webp"
        />
        <div className="card-body">
          <h5 className="card-title">{item["Title"]}</h5>
          <p className="card-text truncate-text fs-6">{item["Body"]}</p>
          <a className="btn btn-primary" onClick={handleAddToCart}>
            Add To Cart
          </a>
        </div>
      </div>
    </>
  );
};
export default Item;
