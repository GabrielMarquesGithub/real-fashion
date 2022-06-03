// imports do react
import { createContext, useReducer } from "react";

//import para optimização de escrita do reducer utils
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  deleteItemToCart: () => {},
  cartCount: 0,
  cartTotalValue: 0,
});

//função para deletar item
const deleteItemCart = (product, cartItems) => {
  //No delete não é necessário modificar uma chave de um objeto dentro do array, usando o 'splice' e que recebe o index do array e a quantidade de elementos do array que deve ser apagada, o 'indexOf' ira retorna em qual index existe o product atual
  cartItems.splice(cartItems.indexOf(product), 1);
  //retorno do array a ser setado já modificado
  return [...cartItems];

  //outra maneira de ser feito é usando o 'filter'
  //usando o 'filter' para retornado apenas elementos cujo id pe diferente do atual, basicamente deletando-o do array
  //cartItems.filter((element) => element.id ==! product.id)
};
//função para remover item
const removeItemCart = (product, cartItems) => {
  const existCartItem = cartItems.find((element) => element.id === product.id);
  if (existCartItem.num < 2) return deleteItemCart(product, cartItems);

  existCartItem.num = existCartItem.num - 1;
  return [...cartItems];
};
//função para adicionar item
const addCartItem = (product, cartItems) => {
  //função é chamada por outra, e o retorno irá setar o state

  //o método 'find' retorna um elemento baseado em 'encontrar' algo, neste caso será retornado um objeto do array 'cartItems' que possuir ID igual ao ID do produto atual
  const existCartItem = cartItems.find((element) => element.id === product.id);

  //testa se algo foi retornado por 'find'
  if (existCartItem) {
    //se executado, o objeto retornado tem o valor se sua quantidade incrementada
    existCartItem.num = existCartItem.num + 1;
    //é retornado o array para ser setado sme receber um novo objeto
    return [...cartItems];
  }
  //é retornado o array com um novo objeto criado
  return [...cartItems, { ...product, num: 1 }];
};

//ações por type
export const CART_ACTION_TYPES = {
  SET_CART_OPEN: "SET_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};
const cartReducer = (state, action) => {
  const { type, payload } = action;
  //usando switch para executar o reducer
  switch (type) {
    //caso 1..
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        //payload está recebendo um objeto, para preenchimento rápido utilizamos rest
        ...payload,
      };
    //caso default
    default:
      throw new Error(`Type desconhecido ${type} no cart reducer`);
  }
};
//sets iniciais para os items do state
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotalValue: 0,
};
//provider do cart
export const CartProvider = ({ children }) => {
  //'States' forem substituídos pelo 'reducer'
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  //desestruturando para obtenção dos valores do objeto 'state' do 'reducer'
  const { isCartOpen, cartItems, cartCount, cartTotalValue } = state;

  //chamada para alteração de estado sobre o carro está aberto
  const setIsCartOpen = (open) => dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, open));

  //utilizando a antiga função set do 'useState', quando ela for chamada e receber os novos items irá chamar o dispatch do reducer
  const setCartItems = (items) => {
    //'dispatch' do reducer recebendo o 'type' e o 'payload', o payload é retornado por uma função
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updateCartItems(items)));
  };

  //função que retorna o payload completo para o 'cartItems', substitui o 'useEffect'
  const updateCartItems = (items) => {
    //usando o reduce para 'somar' o valor total dos items presentes no cart
    const newCartValue = items.reduce((total, cartItem) => total + cartItem.num * cartItem.price, 0);
    //reduce para somar a quantidade de items
    const newCartCount = items.reduce((total, cartItem) => total + cartItem.num, 0);
    //retorno de um objeto já com os items, valor total, e quantidade
    return { cartItems: items, cartTotalValue: newCartValue, cartCount: newCartCount };
  };

  //função para verificar se já há produto no carro, e se houver apenas modificar a quantidade e não adicionar outro
  const addItemToCart = (product) => {
    setCartItems(addCartItem(product, cartItems));
  };
  const removeItemToCart = (product) => {
    setCartItems(removeItemCart(product, cartItems));
  };
  const deleteItemToCart = (product) => {
    setCartItems(deleteItemCart(product, cartItems));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    deleteItemToCart,
    cartCount,
    cartTotalValue,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
