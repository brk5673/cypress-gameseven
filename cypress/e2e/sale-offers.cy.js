/// <reference types="cypress" />

describe('Buscador de precios de zapas', () => {
    //before/beforeEach/afterEach/after
   /*  before(() => {
      cy.visit('https://www.footlocker.com')
    }) */
  
    it('verificar que estamos en la pagina de footlocker', () => {    
      cy.visit('https://www.nike.com/us') 
      cy.url().should('include', 'nike')
      
    })
  })
  