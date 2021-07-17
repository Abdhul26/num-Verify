import React, { useEffect, useState } from "react";
import "./numVerify.css";

const NumVerify = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "http://apilayer.net/api/validate?access_key=3eece2042c90e054c219c77fd5453008&country_code=IN&format=1&number=" +
        `$(onChangeName)`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  if (data) {
    return (
      <div className="numVerify">
        <h1>Number: {data.number}</h1>
        <hr />
        <p>Carrier: {data.carrier}</p>
        <p>Country_code: {data.country_code}</p>
        <p>Country_name: {data.country_name}</p>
        <p>Country_prefix: {data.country_prefix}</p>
        <p>International_format: {data.international_format}</p>
        <p>Local_format: {data.local_format}</p>
        <p>Iine_type: {data.line_type}</p>
        <p>Location: {data.location}</p>
      </div>
    );
  } else {
    return <h1>Data is Loading...</h1>;
  }
};

export default NumVerify;
