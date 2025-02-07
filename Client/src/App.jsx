import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Important for dropdowns
import "./App.css";
import Header from "./Components/Header";
import Test from "./Components/Test";
import Footer from "./Components/Footer";
import ItemList from "./Components/ItemList";
import Cart from "./Components/Cart";
import OrderModel from "./Components/OrderModel";
import Test2 from "./Components/Test2";
function App() {
  return (
    <>
      <Header></Header>
      <Cart />
      <ItemList></ItemList>
      <OrderModel />
      <Footer></Footer>
    </>
  );
}

export default App;
