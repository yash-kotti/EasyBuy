import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Important for dropdowns
import "./App.css";
import Header from "./Components/Header";
import Test from "./Components/Test";
import Footer from "./Components/Footer";
import ItemList from "./Components/ItemList";
import data from "./data/data.json";
function App() {
  const dataArr = data;
  return (
    <>
      <Header></Header>
      <ItemList dataArr={dataArr}></ItemList>
      <Footer></Footer>
    </>
  );
}

export default App;
