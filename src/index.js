//importes tanto do React quando do reactDOM
import React from "react";
import ReactDOM from "react-dom/client";
//import React Router
import { BrowserRouter } from "react-router-dom";
//import de style
import "./index.scss";
//importe do componente App e Context
import App from "./App";

//import do context, é mais provável que o Products provider necessitem dos dados do user, para uma filtragem por localização por exemplo, então ele precisaria ser adicionado como filho para acessar o dados --- isso pode variar de projeto para projeto
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

import reportWebVitals from "./reportWebVitals";

//utilização do React DOM para renderizar códigos utilizando React no browser
const root = ReactDOM.createRoot(document.getElementById("root"));
//a tag de 'StrictMode' para averiguar erros deve envolver tudo, a tag 'BrowserRouter' deve envolver o app para indicar a utilização do React Router visando a navegação via url, e o 'UserProvider' vem posteriormente indicando acesso do context
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
