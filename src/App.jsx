import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Layout from "./layout/Layout";
import { ProductsList as PRODUCTS } from "./data/products";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/Signup";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
