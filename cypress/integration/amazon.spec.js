/// <reference types="cypress" />


    context('Buscando en AMAZON USA', () => {    
      beforeEach(() => {
        cy.visit('www.amazon.com')
        cy.url().should('include', 'https://www.amazon.com') //verificamos que estamos en la pagina de nike
      })
  
      it('Buscar un producto', () => {
        cy.wait(5000)
        cy.get('#nav-main > div.nav-left > div > div > div.glow-toaster-footer > span.a-button.a-spacing-top-base.a-button-primary.glow-toaster-button.glow-toaster-button-submit > span > input').click()
       
        //cy.contains('Deliver to').click()  //obtenemos el input de busqueda
        //cy.contains("CAMBIAR LA DIRECCIÓN")
          //.click()
        //cy.scrollTo('top')

        cy.get('#GLUXZipUpdateInput')
          .type('33166')
        cy.contains('Aplicar').click({force: true}) 

        cy.get('#a-popover-1 > div').within(()=>{
          cy.contains('Continuar')
       })

        //cy.contains('Continuar').click({force: true})

      })
  
  })

  
    