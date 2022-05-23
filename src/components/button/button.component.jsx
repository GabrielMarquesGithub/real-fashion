import "./button.style.scss";

// na aplicação serão usados 3 tipos de button, sendo os diferentes google and inverted

//criando uma lista de 'tradução', as chaves vão ser add de maneira dinâmica
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => (
  //usando o operador '[]' para determinar a chave de um objeto via uma variável quen o caso é o parâmetro 'buttonType' tornando assim a escolha dinâmica
  <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
    {children}
  </button>
);

export default Button;
