import { Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import MainHeader from "./Components/MainHeader";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </>
  );
}

export default App;
