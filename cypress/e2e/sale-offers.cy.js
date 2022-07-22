/// <reference types="cypress" />

describe('Buscador de precios de zapas', () => {
  before(() => {
    cy.visit('www.nike.com/us/es')
  })

  context('Buscando con el campo de busqueda', () => {    
    beforeEach(() => {
      cy.url().should('include', 'https://www.nike.com/us') //verificamos que estamos en la pagina de nike

    })
    /* it('Si el modelo buscado existe se visualiza en los resultados', () => {
      cy.get('#VisualSearchInput')  //obtenemos el input de busqueda
        .type('Nike Zoom')  
    }) */

    it('Si la busqueda no arroja resultados se muestra un aviso al usuario', () => {
      const searchCriteria = 'Ginobili'
      cy.wait(2000)
      cy.get('#VisualSearchInput').click()
        .type(`${searchCriteria}{enter}`)
      cy.contains(`No pudimsos encontrar nada para ${searchCriteria}`)
    })
    
  })
})
  