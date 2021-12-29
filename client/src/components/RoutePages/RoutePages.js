import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../../pages/HomePage/HomePage";
import CartPage from "../../pages/CartPage/CartPage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import Collection from "../../pages/CollectionPage/CollectionPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import CategoryPage from "../../pages/CategoryPage/CategoryPage";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import { customerData } from "../../store/selectors";
import OrderPage from "../Order-page/Order-page";
import PaymentPage from "../Order-page/Payment-page/Payment-page";

const RoutePages = () => {
  const store = useSelector((state) => state);

  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/cart" component={CartPage}></Route>
      <Route exact path="/product/:productId" component={ProductPage}></Route>
      <Route exact path="/favorites" component={FavoritesPage}></Route>
      <Route exact path="/products" component={Collection}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/registration" component={RegistrationPage}></Route>
      <Route exact path="/profile">
        {customerData(store).id ? (
          <ProfilePage />
        ) : (
          <Redirect to="/registration" />
        )}
      </Route>
      <Route
        exact
        path="/category/:categoryId"
        component={CategoryPage}
      ></Route>
      <Route exact path="/order" component={OrderPage}></Route>
    </Switch>
  );
};

export default RoutePages;
