/// <reference types="cypress" />


    context('Buscando en AMAZON USA', () => {    
      beforeEach(() => {
        cy.visit('www.amazon.com')
        cy.url().should('include', 'https://www.amazon.com') //verificamos que estamos en la pagina de nike
      })
  
      it('Buscar un producto', () => {
        cy.contains('Deliver to').click()  //obtenemos el input de busqueda
        cy.contains("CAMBIAR LA DIRECCIÓN")
          .click()
        cy.wait(5000)
        cy.scrollTo('top')
      })
  
  })

  
    