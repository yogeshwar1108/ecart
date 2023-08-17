import { Provider } from "react-redux";
import "./App.css";

import Navbar from "./components/Navbar";
import store from "./components/Redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
      </Provider>
    </div>
  );
}

export default App;
