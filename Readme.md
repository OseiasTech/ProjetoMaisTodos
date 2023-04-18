# Demo QA #

Este projeto é destinado a automações de teste Front-end E2E funcional da plataforma Web do Demo QA

### Ferramentas Utilizadas ###
 * Cypress
 * JavaScript
 * Allure Reports
 * Cucumber

### Para que serve este repo? ###

* Documentar / Automatizar todas as features 
* Version 10.10.0
* [Framework de atuação => Cypress](https://www.cypress.io/)

### Executando o projeto ###

Instalando todas as dependêcias:

- npm install


Rodando os testes:

- npx cypress open: - Esse comando abre o cypress para execuções manuais


### Arquitetura do Projeto :gear: : ###
e2e:

- Nesta pasta contém o arquivo com a escrita em BDD com Gherkin

plugins:

- index.js: - Dependência do Allure.

Support:

- Elements: - A pasta Elementos é destinada a conter todos o arquivo de mapeamento de elementos.

- PageObjects: - A pasta PageObjects concentra toda a lógica e interação com a aplicação.

- Step: - Steps possui o arquivo responsável por unir o cenário descrito, e o código para interação com a aplicação.

fixtures:

-  Nesta pasta contém todos os dados Json de login.


### Configuração da máquina ###
- Java Script
- NodeJs
- VsCode

* Plugins:
- Babel JavaScript
- Beautify
- Bracket Pair Colorizer 2
- Code Time
- Color Highlight
- Cucumber (Gherkin) Full Support
- Cucumber (Gherkin) Support enhanced for Behat
- Feature Syntax Highlight and Snippets (Cucumber/Gherkin)
- Snippets and Syntax Highlight for Gherkin (Cucumber)
- Cucumber Quick
- Cuke Step Definition Generator
- Cuke-support
- Dracula Official (opcional)
- ES7 React/Redux/GraphQL/React-Native
- ESLint
- Prettier - Code formatter
- Prettier ESLint
- Pretty Formatter
- Gherkin Indent
- Git Blame
- Git Extension Pack
- Git Merger
- Gitignore
- Git History
- GitLens - Git supercharged
- JavaScript (ES6) code snippets
- npm
- npm Intellisense
- Open in GitHub, Bitbucket, Gitlab
- Project Manager
- VsCode-icons

### Created by ###

* Jessica Oliveira 

