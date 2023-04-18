/// <reference types="Cypress"/>

import aplicationBookElements from "../elements/bookStoreElements";
const ambiente = Cypress.config("baseUrl")
import dados from "../../fixtures/dados.json"
const aplicationDemoQA = new aplicationBookElements;


class demoQA {

// Cenário: Realizar o login na aplicação //
acessarSite() {
    cy.visit(ambiente)
}

loginAplicacao () {
    cy.get(aplicationDemoQA.btn_categoriaBookStoreApp1()).click();
    cy.get(aplicationDemoQA.btn_loginSucesso()).click();
    cy.get(aplicationDemoQA.lbl_userName1()).first().type(dados.userNameSucesso);
    cy.get(aplicationDemoQA.lbl_password1()).type(dados.passwordSucesso);
    cy.get(aplicationDemoQA.btn_logarAplicacao()).click();
}
autenticacaoSucesso () {
    cy.get(aplicationDemoQA.txt_validacaoAutenticacao()).should('contain', 'Teste do Teste');
}

// Cenário: Acessar e adicionar um livro na coleção //
adicionarLivro () {
    cy.get(aplicationDemoQA.lbl_buscarLivro()).type('Speaking JavaScript');
    cy.contains('Speaking JavaScript').click();
    cy.get(aplicationDemoQA.btn_adicionar()).click();
    cy.wait(2000)
}

acessarProfile () {
    cy.get(aplicationDemoQA.btn_profile()).click();
    cy.wait(2000)
}

removerLivro () {
    cy.get(aplicationDemoQA.btn_removerLivro()).click();
    cy.get(aplicationDemoQA.btn_modalRemover()).click();
    cy.wait(2000)
}

logoutAplicacao () {
    cy.get(aplicationDemoQA.btn_logout()).click();

}
    
}


export default demoQA