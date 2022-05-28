// imports do react
import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalValue, setCartTotalValue] = useState(0);

  //função para atualizar o 'cartCount'
  //o ideal é que cada função execute apenas uma ação, foi utilizada apena um 'useEffect' por ser um código que não executa tantas ações
  useEffect(() => {
    //o método 'reduce' percorre um array com a ideia de 'somar' os elementos, e retorna o total, a função que ele recebe tem como parâmetro, o total que será retornado, e o elemento do array que ele está inteirando
    //soma o valor total dentro do Cart, quantidade de itens vezes o preço
    const newCartValue = cartItems.reduce((total, cartItem) => total + cartItem.num * cartItem.price, 0);
    //atualiza a quantidade de itens dentro do cart
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.num, 0);
    setCartTotalValue(newCartValue);
    setCartCount(newCartCount);
    //use state será executado toda vez que o 'cartItems' sofrer execuções, algo proximo ao DidUpdate
  }, [cartItems]);

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
