import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Footer />
      </Router>

    </Provider>
  );
}

export default App;
