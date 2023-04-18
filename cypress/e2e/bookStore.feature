#language: pt

Funcionalidade: Acessando o card Book Store Application

Cenário: Realizar login com o usuário invalido
    Dado que acesso a aplicação WEB
    Quando acesso a plataforma com usuario invalido
    Então o sistema informa que o usuario e invalido

Cenário: Realizar o login na aplicação
    Dado que acesso a aplicação WEB
    Quando informo meu UserName e Password
    Então sou autenticado com sucesso

Cenário: Acessar e adicionar um livro na coleção
    Dado que eu esteja logado na aplicação
    Quando busco um determinado livro
    E adiciono na coleção
    E valido se o livro foi adicionado e removo ele da coleção
    Então faço o logout na aplicação