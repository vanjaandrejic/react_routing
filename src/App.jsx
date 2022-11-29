import { Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </>
  );
}

export default App;
