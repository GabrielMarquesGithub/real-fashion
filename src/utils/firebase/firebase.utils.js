//####################### Importes #######################

//importe do método de inicialização do firebase
import { initializeApp } from "firebase/app";

//imports para a autenticação do firebase, sign with popup and redirect
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import para verificação por email e senha, como não ocnta com o provedor só é necessário o import do método
import { createUserWithEmailAndPassword } from "firebase/auth";

//imports para o BD firebase
//o doc que nos informa o documento, o get serve para utilização do doc e o set para setarmos o doc
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//####################### firebase autenticação #######################

// configurações firebase obtida no console do firebase
const firebaseConfig = {
  apiKey: "AIzaSyCicZestwxXMl-X2M_bMwhZBeg3zGCEEoA",
  authDomain: "real-fashion-db.firebaseapp.com",
  projectId: "real-fashion-db",
  storageBucket: "real-fashion-db.appspot.com",
  messagingSenderId: "254909883688",
  appId: "1:254909883688:web:eecef4a966536835b45c1d",
};

// inicializando o firebase
const firebaseApp = initializeApp(firebaseConfig);

//instanciando um provedor, que pod ser o google, o facebook, github, etc..
const provider = new GoogleAuthProvider();

//setando opções do provider
provider.setCustomParameters({
  prompt: "select_account",
});

//auth recebe a autenticação
//o auth é como um banco de memoria atrelado ao firebase onde ele acompanha todas as autenticações realizadas no site independentemente do local
export const auth = getAuth();

//criando método de login baseado no Google popup, recebe a auth e o provider instanciados previamente, é possível usar outra método como o redirect
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//login com google redirect
//ao usar o redirect somo redirecionados para realização do login, isso faz com que o site seja desmontado e ações perdidas, para realizar a verificação após a volta é necessário receber o retorno do redirect por meio do 'getRedirectResult' disponível no firebase
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

//####################### firebase BD #######################

//o 'db' aponta diretamente para o BD com o 'getFirestore'
export const db = getFirestore();

//método para criar um documento após a autenticação, recebe o user autenticado
export const createUserDocumentFromAuth = async (userAuth) => {
  //if para 'proteger' uma execução sem o valor necessário
  if (!userAuth) return;

  //parâmetros: 1 'db' banco de dados, 2 'users' nome da collection, 3 'userAuth.uid' identificador id
  const userDocRef = doc(db, "users", userAuth.uid);

  //get no documento referenciado por 'userDocRef'
  const userSnapshot = await getDoc(userDocRef); //---- assíncrono

  // 'exists' retorna um valor boolean baseado na existência ou não do nosso userSnapshot
  if (!userSnapshot.exists()) {
    //destructuring de elementos que queremos do usuário
    const { displayName, email } = userAuth;
    //criando uma data para saber quando a conta foi registrada
    const creatDate = new Date();

    // 'try' para capturar possíveis erros durante o processo de gravação
    try {
      // 'setDoc' para setar valores no objeto a ser criado
      await setDoc(userDocRef, {
        displayName,
        email,
        creatDate,
      });
    } catch (error) {
      //erro se detectado vai soltar essa mensagem
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

//função para criar autenticação de user com email e senha
export const createAuthUserWithEmailAndPassword = (email, password) => {
  //if para 'proteger' uma execução sem o valor necessário
  if (!email || !password) return;
  //chamada da função importada do firebase para criação de um user com email e senha
  return createUserWithEmailAndPassword(auth, email, password);
};
