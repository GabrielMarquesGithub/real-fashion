// imports do react
import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

//neste caso o create state está sendo iniciado diretamente
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  //o use state já está sendo iniciado com o valor do json importado
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
