import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap";
import "./App.css";
import Header from "./Components/Header";
import Test from "./Components/Test";
import Footer from "./Components/Footer";
import ItemList from "./Components/ItemList";
import Cart from "./Components/Cart";
import OrderModel from "./Components/OrderModel";
import Test2 from "./Components/Test2";
import Header_new from "./Components/Header_new";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialize all Bootstrap components
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    console.log("Bootstrap Loaded:", typeof bootstrap !== "undefined");
  }, []);
  return (
    <>
      <Header></Header>
      {/* <Header_new /> */}
      <Cart />
      <ItemList />
      <OrderModel />
      <Footer />
    </>
  );
}

export default App;
