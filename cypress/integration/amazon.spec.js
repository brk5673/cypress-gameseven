/// <reference types="cypress" />


    context('Buscando en AMAZON USA', () => {    
      beforeEach(() => {
        cy.visit('www.amazon.com')
        cy.url().should('include', 'https://www.amazon.com') //verificamos que estamos en la pagina de nike
      })
  
      it('Buscar un producto', () => {
        cy.get('[data-action-type="SELECT_LOCATION"]')
          .click()
        cy.contains("Choose your location");
        cy.get('#GLUXZipUpdateInput')
          .type('33166') //buscamos el input de zipCode
        cy.contains('Aplicar').click({ force: true }) //click en aplicar
        cy.wait(1000) //esperamos 1 segundos
        cy.intercept('GET', 'https://www.amazon.com/portal-migration/hz/glow/get-location-label*').as('callZipChange')
        cy.get('.a-popover-footer').within(()=>{
          cy.get('.a-button').click()
        })
        
        cy.wait('@callZipChange').then((xhr) => {
          //revisamos que el wrapper del zipCode se haya cambiado
          cy.get('#nav-global-location-popover-link').within(()=>{
            cy.contains("Miami 33166")
          })
        })

        cy.get('#twotabsearchtextbox').scrollIntoView()
          .type('Anta KT 4{enter}') //buscamos algo
      })
  })

  
    