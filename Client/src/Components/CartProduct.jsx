const CartProduct = ({ item }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item["Handle"]}</h6>
          <small className="text-body-secondary">Brief description</small>
        </div>
        <span className="text-body-secondary">{item["Variant Price"]}</span>
      </li>
    </>
  );
};
export default CartProduct;
