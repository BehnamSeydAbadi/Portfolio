import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import AboutMe from "./Components/AboutMe";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AboutMe
      name='Name'
      lastName='LastName'
      summary='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere luctus mollis. Praesent malesuada nec est quis volutpat. Sed sagittis, mauris non rhoncus tincidunt, nisl nibh commodo mi, id consectetur libero nisi in ipsum.'
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
