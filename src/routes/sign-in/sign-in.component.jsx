//importe do firebase utils
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    //usando a função importada para realização de autenticação
    //a resposta está sendo desconstruída para recuperação do elemento 'user' para ser guardado na base de dados
    const { user } = await signInWithGooglePopup(); //---- assíncrono
    //usando um função importada para registro na 'DB'
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Entrar</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
