import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { searchProducts } from "../Store/features/product/productThunks";
import { updateSearchValue } from "../Store/features/search/search";
import {
  setCurrentPage,
  setSelectedCategories,
} from "../Store/features/product/product"; // Import the action for setting categories

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const searchRef = useRef("");
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const selectedCategories = useSelector(
    (state) => state.product.selectedCategories
  );
  // const currentPage = useSelector((state) => state.product.currentPage);

  const handleSearchClicked = async (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    const reqObj = {
      page: 1,
      searchValue: searchValue,
      category: selectedCategories, // This can be updated based on selected categories
    };
    console.log("Req Obj Search:", reqObj);
    dispatch(updateSearchValue(searchValue));
    dispatch(setCurrentPage(1));
    dispatch(searchProducts(reqObj));
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      handleSearchClicked(e);
    }
  };

  const categories = [
    "Hoodies",
    "Children's T-Shirts",
    "T-shirts",
    "Tops",
    "Dresses",
    "Footwear",
    "Skirts",
    "Accessories",
    "Bikinis",
  ];

  // Handle category checkbox change
  const handleCheckboxChange = (category) => {
    // Log the current selected categories for debugging
    console.log("Selected Categories before update: ", selectedCategories);

    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    dispatch(setSelectedCategories(updatedCategories));

    const reqObj = {
      page: 1,
      searchValue: searchTerm,
      category: updatedCategories, // Pass the array directly
    };
    dispatch(setCurrentPage(1));
    dispatch(searchProducts(reqObj));
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
        style={{
          top: "0",
          zIndex: "1000",
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            onClick={(e) => {
              handleSearchClicked(e);
            }}
          >
            EasyBuy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu"
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    width: "250px", // Wider dropdown
                    padding: "10px 0",
                  }}
                >
                  {categories.map((category) => (
                    <li key={category} className="px-3 py-1">
                      <div
                        className="form-check cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <input
                          className="form-check-input cursor-pointer"
                          type="checkbox"
                          id={`check-${category}`}
                          name={category}
                          value={category}
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCheckboxChange(category)}
                        />
                        <label
                          className="form-check-label cursor-pointer"
                          htmlFor={`check-${category}`}
                        >
                          {category}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              onSubmit={handleSearchClicked}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search (by SKU/Name)"
                aria-label="Search"
                ref={searchRef}
                value={searchTerm}
                onInput={handleInputChange} // Detect (X) button click
              />
              <button className="btn btn-outline-primary me-2" type="submit">
                Search
              </button>
            </form>
            <button
              type="button"
              className="btn btn-primary position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
              </svg>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.items.length || ""}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
