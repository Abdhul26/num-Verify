import React from "react";
import "./App.css";
import NumVerify from "./components/NumVerify/NumVerify";

function App() {
  return (
    <>
      <label for="phone">Enter your phone number:</label>
      <input type="tel" id="phone" />
      <button>check</button>
      <NumVerify number={8220365174} />
    </>
  );
}

export default App;
