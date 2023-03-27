import { useReducer } from "react";
import Navbar from "./components/Navbar";
import Pouducts from "./components/Pouducts";
import Cart from "./components/Cart";
import { CartContext, cartReduce, cartInit } from "./store";
function App() {
  const reducer = useReducer(cartReduce, cartInit)

  return (

    <CartContext.Provider value={reducer}>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Pouducts />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
    </CartContext.Provider>

  );
}



export default App;
