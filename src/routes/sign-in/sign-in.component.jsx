//importe do firebase utils
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

//import do 'getRedirectResult' para receber resposta após o redirect
import { getRedirectResult } from "firebase/auth";

//import 'useEffect' para realização de uma ação ao carregar a pagina
import { useEffect } from "react";

//components imports
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const SignIn = () => {
  useEffect(() => {
    (async () => {
      //recebendo a resposta de volta após o redirect
      const response = await getRedirectResult(auth); //---- assíncrono
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    })();
  }, []);

  const logGooglePopup = async () => {
    //usando a função importada para realização de autenticação
    //a resposta está sendo desconstruída para recuperação do elemento 'user' para ser guardado na base de dados
    const { user } = await signInWithGooglePopup(); //---- assíncrono
    //usando um função importada para registrar user na 'BD'
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Entrar</h1>
      <Button onClick={logGooglePopup}>Faça login como o Google popup</Button>
      <Button onClick={signInWithGoogleRedirect}>Faça login como o Google redirect</Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
