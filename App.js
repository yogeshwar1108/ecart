// import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Tproducts from "./components/Tproducts";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayou from "./components/RootLayou";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayou/>}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <Tproducts /> */}
    </div>
  );
}

export default App;
