import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem } from "../Store/features/cart/cartSlice";
import Styles from "./CartProduct.module.css";

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();
  const handleDeleteCartClick = () => {
    console.log("Clicked");
    dispatch(removeItem(item));
  };
  return (
    <>
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6>yash</h6>
        </div>
        <div>
          <h6 className="my-0">{item["Handle"]}</h6>
          <small className="text-body-secondary">
            {item.quantity} x ${item["Variant Price"]}
          </small>
        </div>
        <span className="text-body-secondary">
          <MdDelete
            onClick={handleDeleteCartClick}
            color="red"
            className={Styles["delete-icon"]}
          />
        </span>
      </li>
    </>
  );
};
export default CartProduct;
