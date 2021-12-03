import {
    Switch,
    Route,
  } from "react-router-dom";
import HomePage from '../../pages/HomePage/HomePage';
import CartPage from '../../pages/CartPage/CartPage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import ProductsListPage from '../../pages/ProductsListPage/products-list-page';
import LoginPage from '../../pages/LoginPage/LoginPage';

const RoutePages = () => {
    return (
        <Switch>
              <Route exact path="/" component={ HomePage }></Route>
              <Route exact path="/cart" component={ CartPage }></Route>
              <Route exact path="/product" component={ ProductPage }></Route>
              <Route exact path="/products" component={ ProductsListPage }></Route>
              <Route exact path="/login" component={ LoginPage }></Route>
            </Switch>
    )
}

export default RoutePages