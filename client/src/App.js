import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductsList from "./pages/products-list-page/products-list-page";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>

      <ProductsList />
    </>
  );
}

export default App;
