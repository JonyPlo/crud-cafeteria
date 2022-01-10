import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ProductsTable from "./components/views/ProductsTable/ProductsTable";
import ProductCreate from "./components/views/ProductCreate/ProductCreate";
import ProductEdit from "./components/views/ProductEdit/ProductEdit";
import Error404 from "./components/views/Error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  //State
  const [products, setProducts] = useState([]);
  //Variable de entorno
  const URL = process.env.REACT_APP_API_CAFETERIA;

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const res = await fetch(URL);
      const productApi = await res.json();
      setProducts(productApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/product/table"
              element={<ProductsTable products={products} />}
            />
            <Route exact path="/product/create" element={<ProductCreate />} />
            <Route exact path="/product/edit" element={<ProductEdit />} />
            <Route exact path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
