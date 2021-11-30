import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import formStyle from "../src/styles/form/form.scss"
import RegistrationForm from "./components/form/RegistrationForm";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
      <Router>
      <div className="app">
   <RegistrationForm />
    </div>
      </Router>
    </Provider>
 
  );
}

export default App;
