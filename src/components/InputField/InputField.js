import React from "react";
import "./input.css";

const InputFields = (props) => {
  return (
    <div className="input">
      <label for="phone">Enter your phone number:</label>
      <br />
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{10}"
        value={props.number}
        onChange={props.onChangeName}
      />
    </div>
  );
};

export default InputFields;
