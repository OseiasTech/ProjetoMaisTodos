import demoQA from "../page/bookStorePage";

const bookStore = new demoQA()

// Cenário: Realizar o login na aplicação //
Given("que acesso a aplicação WEB", () => {
    bookStore.acessarSite()
});

When("informo meu UserName e Password", () => {
    bookStore.loginAplicacao()
});

Then("sou autenticado com sucesso", () => {
    bookStore.autenticacaoSucesso()
});

// Cenário: Acessar e adicionar um livro na coleção //
Given("que eu esteja logado na aplicação", () => {
    bookStore.acessarSite()
    bookStore.loginAplicacao()
    bookStore.autenticacaoSucesso()
});

When("busco um determinado livro", () => {
    bookStore.adicionarLivro()
});

And("adiciono na coleção", () => {
    bookStore.acessarProfile()
});

And("valido se o livro foi adicionado e removo ele da coleção", () => {
    bookStore.removerLivro()

});

Then("faço o logout na aplicação", () => {
    bookStore.logoutAplicacao()
});