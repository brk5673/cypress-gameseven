/// <reference types="cypress" />

describe.skip('Buscador de precios de zapas', () => {
    context('Buscando en NIKE con el campo de busqueda', () => {    
      beforeEach(() => {
        cy.visit('www.nike.com/us/es')
        cy.url().should('include', 'https://www.nike.com/us') //verificamos que estamos en la pagina de nike
      })
  
      it('Si el modelo buscado existe se visualiza en los resultados', () => {
        cy.get('#VisualSearchInput')  //obtenemos el input de busqueda
          .type('Nike Zoom{enter}') //escribimos el modelo que queremos buscar')  
      })
  
      it('Si la busqueda no arroja resultados se muestra un aviso al usuario', () => {
        const searchCriteria = 'Ginobili'
        cy.get('#VisualSearchInput').click()
          .type(`${searchCriteria}{enter}`)
        cy.contains(`No pudimsos encontrar nada para ${searchCriteria}`)
      })
      
    })
  
    context('Buscando en ADIDAS con el campo de busqueda', () => {    
      beforeEach(() => {
        cy.visit('https://www.adidas.com')
        cy.url().should('include', 'https://www.adidas.com') //verificamos que estamos en la pagina de nike
      })
  
      it('Si el modelo buscado existe se visualiza en los resultados', () => {
        cy.contains('Search').click()  //obtenemos el input de busqueda
          .type('Dame 8')  
      })
      
    })
  })

  
    