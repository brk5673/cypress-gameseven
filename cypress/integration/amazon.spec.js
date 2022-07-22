/// <reference types="cypress" />


    context('Buscando en NIKE con el campo de busqueda', () => {    
      beforeEach(() => {
        cy.visit('www.amazon.com')
        cy.url().should('include', 'https://www.amazon.com') //verificamos que estamos en la pagina de nike
      })
  
      it('Buscar un producto en Amazon USA', () => {
        
      })
  
  })

  
    