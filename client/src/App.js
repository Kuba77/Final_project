import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";



function App() {
  return (
    <Provider store={store}>
       <Router>
        <Header />
      </Router>
    </Provider>
 
  );
}

export default App;
