//import do React Routes para trabalhar com rotas
import { Routes, Route } from "react-router-dom";

//import components from routes
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component.jsx";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => <h1>shop</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
