//import Outlet é basicamente um componente representando, o componenete em conjunto dentro das 'Routes'
import { Outlet } from "react-router-dom";

//import do context e do useContext para utilização do context
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";

//import context cart
import { CartContext } from "../../contexts/cart.context";

import { userSignOut } from "../../utils/firebase/firebase.utils";

//import de um SVG para logo, foi passado para o nome 'LogoCoroa'
import { ReactComponent as LogoCoroa } from "../../assets/crown.svg";

// ####################### import style #######################
import { BgDropdownMenu, LogoContainer, NavigationContainer, NavLink, NavLinksContainer } from "./navigation-bar.style";

//import component icon svg, e do menu dropdown
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const NavigationBar = () => {
  //usando context para modificações na navegação
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <LogoCoroa className="logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={userSignOut} to="/authentication">
              SAIR
            </NavLink>
          ) : (
            <NavLink to="/authentication">ENTRAR</NavLink>
          )}
          <span onClick={() => setIsCartOpen(!isCartOpen)}>
            <CartIcon />
          </span>
        </NavLinksContainer>

        {isCartOpen && (
          <>
            <BgDropdownMenu onClick={() => setIsCartOpen(!isCartOpen)}></BgDropdownMenu>
            <CartDropdown />
          </>
        )}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavigationBar;
