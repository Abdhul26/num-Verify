import React, { useState } from "react";
import "./App.css";
import InputFields from "./components/InputField/InputField";
import NumVerify from "./components/NumVerify/NumVerify";

function App() {
  const [value, setValue] = useState(null);

  const changeName = (name) => {
    setValue(name);
    console.log(value);
  };

  return (
    <div className="container">
      <InputFields onChangeName={(e) => changeName(e.target.value)} />
      <NumVerify number={8220365174} />
    </div>
  );
}

export default App;
