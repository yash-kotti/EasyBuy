import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import {
  fetchProducts,
  searchProducts,
} from "../Store/features/product/productThunks";

const ItemList = () => {
  const dispatch = useDispatch();
  const [currPage, setCurrPage] = useState(1);
  const { productsList, totalPages } = useSelector((state) => state.product);
  const [loading, setLoading] = useState(false);
  const { searchValue } = useSelector((state) => state.searchProduct);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const reqObj = {
          page: currPage,
          seachValue: searchValue,
          category: "",
        };
        if (searchValue != "") {
          await dispatch(searchProducts(reqObj));
        } else {
          await dispatch(fetchProducts(reqObj));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currPage, dispatch]);

  const handlePageClick = (pageNo) => {
    if (pageNo < 1 || pageNo > totalPages) return;
    setCurrPage(pageNo);
  };

  const handleNextButtonClicked = () => {
    if (currPage < totalPages) {
      setCurrPage(currPage + 1);
    }
  };

  const handlePreviousButtonClicked = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  // **Dynamic Pagination Calculation**
  const generatePagination = () => {
    if (totalPages <= 7) return [...Array(totalPages).keys()].map((i) => i + 1);

    const pages = new Set(); // Using a Set to avoid duplicate entries

    // Always show first two pages
    pages.add(1);
    pages.add(2);

    // Add middle section dynamically
    if (currPage > 3) pages.add("...");

    // Add current page, previous, and next
    if (currPage > 2 && currPage < totalPages - 1) {
      pages.add(currPage - 1);
      pages.add(currPage);
      pages.add(currPage + 1);
    }

    // If the current page is 3 or 4, expand the pagination at the start
    if (currPage === 3 || currPage === 4) {
      pages.add(3);
      pages.add(4);
      pages.add(5);
      pages.add(6);
    }

    // Add an ellipsis if needed before the last few pages
    if (currPage < totalPages - 3) pages.add("...");

    // Always show last two pages
    pages.add(totalPages - 1);
    pages.add(totalPages);

    return Array.from(pages);
  };
  if (productsList.length === 0) {
    return (
      <div className="text-body-secondary text-center">No products found</div>
    );
  }
  return (
    <div>
      {/* Product List */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          productsList.map((item, index) => <Item key={index} item={item} />)
        )}
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              onClick={handlePreviousButtonClicked}
              href="#"
            >
              Previous
            </a>
          </li>

          {generatePagination().map((page, index) => (
            <li
              key={index}
              className={`page-item ${currPage === page ? "active" : ""} ${
                page === "..." ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                onClick={page === "..." ? null : () => handlePageClick(page)}
                href="#"
              >
                {page}
              </a>
            </li>
          ))}

          <li
            className={`page-item ${currPage === totalPages ? "disabled" : ""}`}
          >
            <a className="page-link" onClick={handleNextButtonClicked} href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ItemList;
