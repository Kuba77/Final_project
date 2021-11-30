import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'
import ProductPage from "./pages/product-page/ProductPage";
import CartPage from "./pages/cart-page/cart-page";
import MainPage from "./pages/main-page/main-page";

function App() {
  return (
    <Provider store={store}>
      <Router>
          {/* <Header /> */}
          {/* <Main />    */}
        {/* <ProductPage /> */}
        <Route exact path="/" component={MainPage} />
        {/* <Route exact path="/productPage" component={ProductPage} /> */}
        <Route path="/cart"  component={CartPage} />
      </Router>   
    </Provider>
  );
}

export default App;
