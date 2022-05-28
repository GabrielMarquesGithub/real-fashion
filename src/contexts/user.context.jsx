// imports do react
import { createContext, useEffect, useState } from "react";

//import do 'analista' de alterações e do gravador na BD
import { authChangeListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

const defaultContext = {
  currentUser: null,
  setCurrentUser: () => null,
};

//criando um context
// o context pode ser preenchido de duas formas diretamente ou de fora
export const UserContext = createContext(defaultContext);

//criando o componente provider do context
export const UserProvider = ({ children }) => {
  //setando o state que vai estar acessível em todo o app
  const [currentUser, setCurrentUser] = useState(null);
  //colocando em 'value' ferramentas do state
  const value = { currentUser, setCurrentUser };
  //retornando p context provider

  //useEffect como didMount para sempre que o context for renderizado irá chamar a função observer, e também serve como limitador, pois quando for desmontado a função irá para de ser executada
  useEffect(() => {
    //função de proteção para limitar a execução indeterminada, recebe o 'authChangeListener' que por sua vez passa uma função de callback para executar quando o auth for alterado
    const unsubscribe = authChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      //setando o valor do user quando o auth é alterado, permitindo uma execução centralizada e com maior desempenho
      setCurrentUser(user);
    });
    //return da função de limpeza
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// !!! a principal ideia do context é permitir que uma state possa ser alterado ou obtido em toda arvore de componentes envolvida pelo 'context', geralmente se envolve todo o App permitindo um acesso quase global, substituindo as subidas e decidas de props
