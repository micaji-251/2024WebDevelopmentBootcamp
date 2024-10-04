import React from "react";
import Login from "./Login";

function App() {
  let isLoggedIn = false;

  function renderConditionally() {
    return isLoggedIn ? <h1>Hello</h1> : <Login />;
  }

  return <div className="container">{renderConditionally()}</div>;
}

export default App;
