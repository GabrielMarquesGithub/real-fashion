# [Real-Fashion](https://euphonious-youtiao-a6b4e3.netlify.app/)

## Deploy

Você pode acessar a versão implantada deste projeto [aqui](https://euphonious-youtiao-a6b4e3.netlify.app/).

## Imagens

![Imagem da página inicial do projeto](https://github.com/NikisGabriel/real-fashion/blob/master/documents/real-fashion.png)
![Imagem do carrinho do projeto](https://github.com/NikisGabriel/real-fashion/blob/master/documents/real-fashion-cart.png)
![Imagem da página de produtos](https://github.com/NikisGabriel/real-fashion/blob/master/documents/real-fashion-products.png)
![Imagem da página de login do projeto](https://github.com/NikisGabriel/real-fashion/blob/master/documents/real-fashion-login.png)
![Imagem da página de checkout do projeto](https://github.com/NikisGabriel/real-fashion/blob/master/documents/real-fashion-checkout.png)

## Tecnologias Utilizadas

- JavaScript
- Git
- Sass
- React
- Styled-components
- React Router
- Firebase

## API

Este projeto emprega o Firebase do Google como um BaaS, tanto para trabalhar com dados quanto para autenticação.

## Padrões de Codificação

- **Nomenclatura:**

  - Componentes: Utilizam o padrão PascalCase.
  - Contextos: Utilizam o padrão PascalCase com o sufixo "Context".
  - Provedores: Seguem o padrão PascalCase com o sufixo "Provider".
  - Funções: Seguem o padrão camelCase.
  - Constantes e variáveis: Seguem o padrão camelCase.
  - Constantes e variáveis de configuração: Seguem o padrão screaming snake case.

- **Estrutura de Arquivos:**
  - `src`: Contém o código-fonte da aplicação.
    - `assets`: Inclui recursos estáticos como imagens, fontes, etc.
    - `components`: Reúne componentes React reutilizáveis.
    - `contexts`: Contém Contexts e Providers do React para compartilhamento de estados.
    - `pages`: Mantém as páginas da aplicação.
    - `types`: Contém tipos definidos em TypeScript.
    - `utils`: Mantém funções utilitárias da aplicação.
    - `App.js`: O componente raiz da aplicação React, responsável pelo roteamento com React Router.
    - `index.js`: Ponto de entrada principal da aplicação, responsável por configurar os principais Providers.
    - `index.scss`: Mantém os estilos globais da aplicação.
  - `documents`: Pasta destinada à documentação do projeto.
  - `package.json`: Arquivo para gerenciamento de dependências e informações do projeto.

## Possíveis Atualizações

Entre as ideias de atualização para o projeto, estão:

- Adaptação da aplicação a dispositivos móveis.
- Atualização de autenticação oferecida pelo Firebase.

## Observações

Este projeto foi desenvolvido ainda durante um curso, ele conta com uma grande descrição de cada etapa por meio de comentários no código e apresenta uma certa complexidade a mais, principalmente na integração com o Firebase.
