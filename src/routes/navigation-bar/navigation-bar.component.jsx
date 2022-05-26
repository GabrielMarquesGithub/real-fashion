//import Outlet é basicamente um componente representando, o componenete em conjunto dentro das 'Routes'
import { Outlet, Link } from "react-router-dom";

//import do context e do useContext para utilização do context
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";

//import context cart
import { CartContext } from "../../contexts/cart.context";

import { userSignOut } from "../../utils/firebase/firebase.utils";

//import de um SVG para logo, foi passado para o nome 'LogoCoroa'
import { ReactComponent as LogoCoroa } from "../../assets/crown.svg";
import "./navigation-bar.style.scss";

//import component icon svg, e do menu dropdown
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const NavigationBar = () => {
  //usando context para modificações na navegação
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <LogoCoroa className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link onClick={userSignOut} className="nav-link" to="/authentication">
              SAIR
            </Link>
          ) : (
            <Link className="nav-link" to="/authentication">
              ENTRAR
            </Link>
          )}
          <span onClick={() => setIsCartOpen(!isCartOpen)}>
            <CartIcon />
          </span>
        </div>

        {isCartOpen && (
          <>
            <div onClick={() => setIsCartOpen(!isCartOpen)} className="bg-dropdown-menu"></div>
            <CartDropdown />
          </>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
