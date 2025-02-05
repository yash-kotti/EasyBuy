import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { searchProducts } from "../Store/features/product/productThunks";
import { updateSearchValue } from "../Store/features/search/search";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const searchRef = useRef("");
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClicked = async (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;
    // console.log(searchValue);
    dispatch(updateSearchValue(searchValue));
    dispatch(searchProducts(searchValue));
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      handleSearchClicked(e);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
        style={{
          top: "0",
          zIndex: "1000",
          backgroundColor: "#fff",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      T-shirts
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
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
