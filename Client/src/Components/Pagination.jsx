import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/features/product/productThunks";

const Pagination = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.productsList);
  const handleOneClicked = () => {
    dispatch(fetchProducts(1));
  };
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          {products.length > 0 ? (
            products.map((product, index) => (
              <li className="page-item">
                <a className="page-link" href="#" onClick={handleOneClicked}>
                  {index + 1}
                </a>
              </li>
            ))
          ) : (
            <p>Loading products...</p>
          )}
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Pagination;
