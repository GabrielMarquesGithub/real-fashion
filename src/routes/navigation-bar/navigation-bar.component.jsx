//import Outlet é basicamente um componente representando, o componenete em conjunto dentro das 'Routes'
import { Outlet, Link } from "react-router-dom";

//import de um SVG para logo, foi passado para o nome 'LogoCoroa'
import { ReactComponent as LogoCoroa } from "../../assets/crown.svg";

import "./navigation-bar.style.scss";

const NavigationBar = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <LogoCoroa className="logo" />
      </Link>

      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/sign-in">
          ENTRAR
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default NavigationBar;
