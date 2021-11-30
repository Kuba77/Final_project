import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'
import Header from "./components/Header/Header";
import ProductPage from "./pages/product-page/ProductPage";


function App() {
  return (
    <Provider store={store}>
      <Router>
          <Header />
          <Main />   
        <ProductPage />
      </Router>
    </Provider>
  );
}

export default App;
