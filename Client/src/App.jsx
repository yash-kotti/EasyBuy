import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Important for dropdowns
import "./App.css";
import Header from "./Components/Header";
import Test from "./Components/Test";
import Footer from "./Components/Footer";
import ItemList from "./Components/ItemList";
import data from "./data/data.json";
import Cart from "./Components/Cart";
import OrderModel from "./Components/OrderModel";
import Pagination from "./Components/Pagination";
import Test2 from "./Components/Test2";
function App() {
  const dataArr = data;

  return (
    <>
      <Header></Header>
      <Cart />
      {/* <Test2 /> */}
      <ItemList dataArr={dataArr}></ItemList>
      <OrderModel />
      <Pagination />
      <Footer></Footer>
    </>
  );
}

export default App;
