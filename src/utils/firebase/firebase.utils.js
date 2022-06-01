//####################### Importes #######################

//importe do método de inicialização do firebase
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

//import método de logoff do firebase, e o método de 'escutar' alterações do auth
import { signOut, onAuthStateChanged } from "firebase/auth";

//imports para a autenticação do firebase, sign with popup and redirect
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import para verificação por email e senha, como não conta com o provedor só é necessário o import do método
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

//imports para o BD firebase
//o doc que nos informa o documento, o get serve para utilização do doc e o set para setarmos o doc
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//importes focados no upload de dados
import { collection, writeBatch } from "firebase/firestore";
//importe para realização do get dos dados
import { query, getDocs } from "firebase/firestore";

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

//entrar com email e senha
export const signInNotProvider = (email, password) => signInWithEmailAndPassword(auth, email, password);

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

//####################### firebase LOGIN com E-mail e senha #######################

//função para criar autenticação de user com email e senha
export const createAuthUserWithEmailAndPassword = (email, password) => {
  //if para 'proteger' uma execução sem o valor necessário
  if (!email || !password) return;
  //chamada da função importada do firebase para criação de um user com email e senha
  return createUserWithEmailAndPassword(auth, email, password);
};

//método de realizar log off
export const userSignOut = () => signOut(auth);

//####################### Analise de alterações do auth #######################

//método para executar o 'onAuthStateChanged' que analisa mudanças no auth, ele recebe como argumentos o auth, e o que será executado quando o auth for alterado
export const authChangeListener = (callback) => onAuthStateChanged(auth, callback);

//####################### FireStore - upload de dados para o BD #######################

//método para gravar uma coleção já com documentos dentro dela, primeiro parâmetro será a chave 'nome' da coleção e o segundo os objeto para a coleção
//como deve será gravado na BD deve ser uma função 'async'
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  //é chamado o 'db' que referencia o 'data base', dentro da db usamos o 'collectionKey' para identificar a coleção para assim criar a referencia para a coleção
  const collectionRef = collection(db, collectionKey);

  //o 'writeBatch' deve receber o 'db', ele retorna um batch(lote) que é usando para a realização de transações
  //o batch permite fazermos alterações na db
  const batch = writeBatch(db);

  //usando um método para ler os objetos passados, tornando a realizações das ações algo dinâmico
  objectsToAdd.forEach((object) => {
    //doc recebe collectionRef pois ele informa corretamente qual o db que está sendo usado, e como chave recebe o titulo do objeto, pois cada titulo faz referencia a um único objeto, e a outra chave referencia os produtos contidos nele, o objeto pode ser visualizado em 'src/shop-data.js'
    const docRef = doc(collectionRef, object.title.toLowerCase());

    //o método 'set' presente em batch recebe a referencia de doc indicando o seu local na base de dados, depois recebe o dado a ser alocado dentro dessa referencia - vale destacar que a referencia é criada mesmo antes do preenchimento dela
    batch.set(docRef, object);
  });

  //o método commit serve como 'conformador' para averiguar se a ação de transação ocorreu corretamente
  await batch.commit(); //--- assíncrono
};

//####################### FireStore - download dos dados do db #######################

//método para obter os dados do db
export const getCategoriesAndDocuments = async () => {
  //a chave poder ser inserida de diversas maneiras, como se sabe diretamente a chave foi inserida manualmente
  const collectionRef = collection(db, "categories");

  //query cria um instancia que recebe a collection onde ela realizara as consultas
  const q = query(collectionRef);

  //o 'getDocs' recebendo a instancia do query retorna um snapshot do documento, permitindo acessa-lo
  const querySnapshot = await getDocs(q); // --- assíncrono

  // 'querySnapshot.docs' retorna os objetos reais
  //para a estruturação iremos usar o reduce
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    // 'docSnapshot.data()' retorna todos os dados presente no local referenciado, o 'data' pode receber regras para como os dados serão recuperados
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
