import { BaseButton, GoogleButton, InvertedButton } from "./button.style";

// na aplicação serão usados 3 tipos de button, sendo os diferentes google and inverted

//criando uma lista de 'tradução', as chaves vão ser add de maneira dinâmica
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  //tipo de mapeamento, é retornado o que cumpre a condição, lembrando switch
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  //usando o operador '[]' para determinar a chave de um objeto via uma variável quen o caso é o parâmetro 'buttonType' tornando assim a escolha dinâmica
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
