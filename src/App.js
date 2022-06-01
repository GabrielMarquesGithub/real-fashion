//import do React Routes para trabalhar com rotas
import { Routes, Route } from "react-router-dom";

//import components from routes
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component.jsx";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
