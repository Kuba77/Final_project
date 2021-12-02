import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import ProductPage from "./pages/product-page/ProductPage";
import CartPage from "./pages/cart-page/cart-page";
import MainPage from "./pages/main-page/main-page";
import LoginPage from "./pages/login-page/loginPage";
import SignUp from "./pages/reg-page/regPage";
import CategoryPage from "./pages/category-page/CategoryPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Header /> */}
        {/* <Main />    */}
        {/*  */}
        <Route exact path="/" component={MainPage} />
        {/* <Route exact path="/productPage" component={ProductPage} /> */}
        <Route path="/cart" component={CartPage} />
        <Route exact path="/register">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/category/:categoryId">
          <CategoryPage />
        </Route>
        <Route exact path="/products/:productId">
          <ProductPage />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
