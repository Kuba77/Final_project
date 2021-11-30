import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/login-page/loginPage";
import RegPage from "./pages/reg-page/regPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/register">
            <RegPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
