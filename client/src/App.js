import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import SighnUpForm from "./components/form/SighnUpForm";
import stylesForm from "../src/styles/form/form.scss"



function App() {
  return (
    // <Provider store={store}>
    //    <Router>
    //     <Header />
    //   </Router>
      <div className="app">
       <SighnUpForm />
      </div>
    // </Provider>
   
 
  );
}

export default App;
