/// <reference types="cypress" />

context('loading', () => {
  it('should not be loading by default', () => {
    cy.visit('/cypress/fixtures/loading/without.html')
    cy.get('.vue-select').click()

    cy.get('.loading').should('have.length', 0)
  })

  it('should not be removed', () => {
    cy.visit('/cypress/fixtures/loading/with.html')
    cy.get('.vue-select').click()

    cy.get('.loading').should('have.length', 1)
  })
})
