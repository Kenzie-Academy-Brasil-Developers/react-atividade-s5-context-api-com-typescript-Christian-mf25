import { Products } from "./Components/Product";
import { Cart } from "./Components/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Products />
      <h2 className="cart">Carrinho</h2>
      <Cart />
    </div>
  );
}

export default App;
