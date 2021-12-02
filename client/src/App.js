import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'
import ProductPage from "./pages/product-page/ProductPage";
import CartPage from "./pages/cart-page/cart-page";
import MainPage from "./pages/main-page/main-page";
import LoginPage from "./pages/login-page/LoginPage";
import RegPage from "./pages/reg-page/regPage";
import ProductsList from "./pages/products-list-page/products-list-page";
// import Header from "./components/Header/Header";
import StoreFeatures from "./components/StoreFeaturesSection/StoreFeatures";

function App() {
  return (
    <Provider store={store}>
      <Router>
          {/* <Header /> */}
          {/* <Main />    */}
        <ProductPage />
        <ProductsList />
        
        <Route exact path="/" component={MainPage} />
        {/* <Route exact path="/productPage" component={ProductPage} /> */}
        <Route path="/cart"  component={CartPage} />
        <Route exact path="/register">
        <RegPage />
        </Route>
        <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route>
          <StoreFeatures />
          </Route>
      </Router>   
    </Provider>
  );
  }


export default App
