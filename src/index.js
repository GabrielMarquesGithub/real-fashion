//importes tanto da react quando do reactDOM
import React from "react";
import ReactDOM from "react-dom/client";
//import React Router
import { BrowserRouter } from "react-router-dom";
//import de style
import "./index.scss";
//importe do componente App
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//utilização do React DOM para renderizar códigos utilizando React no browser
const root = ReactDOM.createRoot(document.getElementById("root"));
//a tag de 'StrictMode' para averiguar erros deve envolver tudo, a tag 'BrowserRouter' deve envolver o app parai ndicar a utilização do React Router
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
