import "./sign-in-form.style.scss";
//importe do firebase utils para realização do login pelo google
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import { useState } from "react";

//import de componentes
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

//import de função para realização do login
import { signInNotProvider } from "../../utils/firebase/firebase.utils";

//importe da lista de erros
import { LIST_ERRORS } from "../../utils/firebase/list-errors";

const defaultFormsFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  //######################### login via google popup #########################

  //login via google
  const logGooglePopup = async () => {
    //usando a função importada para realização de autenticação
    //a resposta está sendo desconstruída para recuperação do elemento 'user' para ser guardado na base de dados
    const { user } = await signInWithGooglePopup(); //---- assíncrono
    //usando um função importada para registrar user na 'BD'
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  //######################### login via email e senha #########################

  // usando o objeto criado para iniciar o state 'formsFields'
  const [formsFields, setFormsFields] = useState(defaultFormsFields);
  //desestruturando objeto para facilitar a manipulação
  const { email, password } = formsFields;

  //função para dar reset para o estado padrão dos campos do form
  const resetFormsFields = () => setFormsFields(defaultFormsFields);

  //criação da função para executar sempre que ocorrer um submit, criando a autenticação do user se o processo estiver correto
  //assíncrona pois vai gravar na BD
  const handleSubmit = async (event) => {
    //previvir execuções padrões como atualização da pagina por submit
    event.preventDefault();
    try {
      const response = await signInNotProvider(email, password);
      console.log(response.user);
      //chamada para função de reset
      resetFormsFields();
    } catch (error) {
      //erro se o usuário não existe
      alert(LIST_ERRORS[error.code]);
    }
  };

  //funções executada sempre que um input é alterado
  const handleChange = (event) => {
    //pegando o name e value do elemento que realizou o evento
    const { name, value } = event.target;

    setFormsFields({ ...formsFields, [name]: value });
  };

  //inputs recebem a função do change, o nome para possibilitar um correta edição usando o name que 'handleChange' recebe pelo event, e o value para que o valor dentro do campo esteja atrelado ao state que doi desconstruído
  return (
    <div className="sign-up-container">
      <h2>Já possui uma conta?</h2>
      <span>Realize login</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="E-mail" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Senha" type="password" required onChange={handleChange} name="password" value={password} />
        <div className="buttons-container">
          <Button type="submit">Entrar</Button>
          <Button type="button" buttonType="google" onClick={logGooglePopup}>
            Login com Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
