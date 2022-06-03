// imports do react
import { useReducer } from "react";
import { createContext, useEffect } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

//import do 'analista' de alterações e do gravador na BD
import { authChangeListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

const defaultContext = {
  currentUser: null,
  setCurrentUser: () => null,
};

//criando um context
// o context pode ser preenchido de duas formas diretamente ou de fora
export const UserContext = createContext(defaultContext);

//set para TYPES, facilitando escrita futura e prevenindo erros humanos
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

//função para o reducer
//reducer recebe o state anterior dele mesmo, e a ação 'action'
const userReducer = (state, action) => {
  //na 'action' encontramos o payload, que é basicamente o que estamos adicionando, e temos i type uqe pode ser usado como neste caso uma condicional
  const { type, payload } = action;
  //usando switch para executar o reducer
  switch (type) {
    //caso 1
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    //caso default
    default:
      throw new Error(`Type desconhecido ${type} no user reducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

//criando o componente provider do context
export const UserProvider = ({ children }) => {
  //setando o state que vai estar acessível em todo o app
  // const [currentUser, setCurrentUser] = useState(null);

  //userReducer
  //user reducer inicia com o state e a função dispatch, o hook 'useReducer' recebe a função redutora criada previamente e o valor inicial do state, neste caso vindo de 'INITIAL_STATE'
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  //como no reducer state é um objeto, deve-se tirar o 'currentUser' dele
  const { currentUser } = state;

  // o método set está basicamente executando o dispatch que por usa vez etá levando os valores recebidos a action que seta o state
  const setCurrentUser = (user) => dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

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
