/// <reference types="cypress" />


 
describe('Realizar cadastro completo', () => {

  before(() => {
    cy.visit('http://127.0.0.7:5500/cadastroDados.html')
   });



  it('Validar Formulário', () =>{

    cy.get('#nome').type('Kaique Ferraz da Silva')  //Preencher campo nome e escrever o nome
    cy.get('#nome').should('have.value','Kaique Ferraz da Silva') //Validar campo nome se está preenchido igual
      
    cy.get('#email').type('teste@gmail.com') //Preencher campo email e escrever o email
    cy.get('#email').should('have.value','teste@gmail.com') //Validar campo email se está preenchido igual
  
    cy.get('select').select('Rio de Janeiro') //selecionar campo de seleção

    cy.get('[type="checkbox"]').check(['esporte','viagem']) // Selecionar as opções mencionadas no vetor para o campo checkbox

    cy.get('#enviarForm').click() // Clicar no btn Enviar para realizar o cadastro do formulário

   
  })

  
 
})



/*

it('TESTE IT', () => {
    
  })


  it('Preencher campo nome e escrever o nome', () =>{

    cy.get('#nome').type('Kaique Ferraz da Silva')  //Preencher campo nome e escrever o nome
    cy.get('#nome').should('have.value','Kaique Ferraz da Silva') //Validar campo nome se está preenchido igual
      
  })

  it('Preencher campo email e escrever o email', () => {
    cy.get('#email').type('teste@gmail.com') //Preencher campo email e escrever o email
    cy.get('#email').should('have.value','teste@gmail.com') //Validar campo email se está preenchido igual
  })

  it('selecionar campo de seleção', () =>{
    cy.get('select').select('Rio de Janeiro') //selecionar campo de seleção

  })

  it('Selecionar as opções mencionadas no vetor para o campo checkbox', () =>{
    cy.get('[type="checkbox"]').check(['esporte','viagem']) // Selecionar as opções mencionadas no vetor para o campo checkbox

  })

  it('Clicar no btn Enviar para realizar o cadastro do formulário', () =>{
    cy.get('#enviarForm').click() // Clicar no btn Enviar para realizar o cadastro do formulário

  })

*/
