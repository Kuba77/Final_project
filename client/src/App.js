import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Header />
          <Main />   
      </Router>

    </Provider>
  );
}

export default App;
