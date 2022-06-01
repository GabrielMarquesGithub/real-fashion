// imports do react
import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

//neste caso o create state está sendo iniciado diretamente
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  //o use state já está sendo iniciado com o valor do json importado
  const [categoriesMap, setCategoriesMap] = useState({});

  //useEffect para a execução ao ser montado
  useEffect(() => {
    //em um useEffect para usar 'async' deve-se criar outra função
    const getCategory = async () => {
      const categoryMap = await getCategoriesAndDocuments(); // --- assíncrono, espera a realização de reduce no snapshot
      //setando os produtos baseados no snapshot pego na base de dados usando o 'get'
      setCategoriesMap(categoryMap);
    };
    getCategory();
  }, []);

  const value = { categoriesMap, setCategoriesMap };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
