#language: pt

Funcionalidade: Acessando o card Book Store Application

Cenário: Realizar a criação de um novo usuário com senha fora do padrão
    Dado que acesso a aplicação WEB
    Quando tento criar um usuário com senha inválida fora do padrão
    Então é retornado uma mensagem do formato correto que deve ser

Cenário: Realizar a criação de um novo usuário
    Dado que acesso a aplicação WEB
    Quando crio um usuário com dados validos
    Então é apresentado um modal de sucesso

@focus
Cenário: Realizar o login na aplicação
    Dado que acesso a aplicação WEB
    Quando informo meu UserName e Password
    Então sou autenticado com sucesso

@focus
Cenário: Acessar e adicionar um livro na coleção
    Dado que eu esteja logado na aplicação
    Quando busco um determinado livro
    E adiciono na coleção
    E valido se o livro foi adicionado e removo ele da coleção
    Então faço o logout na aplicação