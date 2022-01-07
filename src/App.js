import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ProductsTable from "./components/views/ProductsTable/ProductsTable";
import ProductCreate from "./components/views/ProductCreate/ProductCreate";
import ProductEdit from "./components/views/ProductEdit/ProductEdit";
import Error404 from "./components/views/Error404/Error404";

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Home />
        {/* <ProductsTable /> */}
        {/* <ProductCreate/> */}
        {/* <ProductEdit/> */}
        {/* <Error404/> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
