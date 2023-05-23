import { useState } from "react";

import "./App.css";
import Layout from "./layout/Layout";
import LoginContextProvider from "./Context/LoginContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LoginContextProvider>
        <Layout />
      </LoginContextProvider>
    </div>
  );
}

export default App;
