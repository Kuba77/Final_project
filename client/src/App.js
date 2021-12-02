import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router} from "react-router-dom";
import RoutePages from '../src/components/RoutePages/RoutePages'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RoutePages/>
      </Router>   
    </Provider>
  );
  }


export default App
