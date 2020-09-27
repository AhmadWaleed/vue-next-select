/// <reference types="cypress" />

context('disabled (single)', () => {
  it('should not be disabled', () => {
    cy.visit('/cypress/fixtures/disabled/single/without.html')
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').should('exist')
  })

  it('should be disabled', () => {
    cy.visit('/cypress/fixtures/disabled/single/with.html')
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').should('not.exist')
  })
})

context('disabled (multiple)', () => {
  it('should not be disabled', () => {
    cy.visit('/cypress/fixtures/disabled/multiple/without.html')
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').should('exist')
  })

  it('should be disabled', () => {
    cy.visit('/cypress/fixtures/disabled/multiple/with.html')
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown').should('not.exist')
  })
})

context('disabled (taggable)', () => {
  it('should not be disabled', () => {
    cy.visit('/cypress/fixtures/disabled/taggable/without.html')
    cy.get('.vue-select').click()

    cy.get('.vue-tags').children().first().click()
    cy.get('.vue-tags').children().first().should('not.have.class', 'selected')
  })

  it('should be disabled', () => {
    cy.visit('/cypress/fixtures/disabled/taggable/with.html')
    cy.get('.vue-select').click()

    cy.get('.vue-tags').children().first().click()
    cy.get('.vue-tags').children().first().should('have.class', 'selected')
  })
})
