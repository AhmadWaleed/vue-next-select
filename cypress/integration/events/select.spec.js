/// <reference types="cypress" />

context('select event', () => {
  it('should fire select event', () => {
    cy.visit('/cypress/fixtures/events/select.html')
    cy.get('.vue-select').click()

    return new Cypress.Promise(resolve => {
      cy.document().then(document => {
        document.documentElement.addEventListener('custom-event', resolve)
        cy.get('.vue-dropdown').children().first().next().click()
      })
    })
  })
})
