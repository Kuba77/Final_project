import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/login-page/LoginPage";
import RegPage from "./pages/reg-page/regPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
      <LoginPage />

      <h1>роздел регистр</h1>
      <RegPage />
    </Provider>
  );
}

export default App;
