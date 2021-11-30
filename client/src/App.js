import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CartPage from "./pages/cart-page/cart-page";
import MainPage from "./pages/main-page/main-page";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={MainPage} />
        
    
        <Route path="/cart"  component={CartPage} />
      </Router>   
    </Provider>
  );
}

export default App;
