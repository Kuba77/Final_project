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
            <h1>роздел регистр</h1>
            <RegPage />
            <h1>==========================</h1>
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <h1>==========================</h1>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
