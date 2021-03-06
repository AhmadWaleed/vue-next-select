/// <reference types="cypress" />

context('options', () => {
  it('should keep valid selected values after options has changed', () => {
    cy.visit('/cypress/fixtures/options/change-options.html')
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown-item.selected').should('have.length', 1)

    cy.get('input').type('i')
    cy.get('.vue-dropdown-item.selected').should('have.length', 1)

    cy.get('input').type('{backspace}')
    cy.get('.vue-dropdown-item.selected').should('have.length', 1)

    cy.get('input').type('e')
    cy.get('.vue-dropdown-item.selected').should('have.length', 0)

    cy.get('input').type('{backspace}')
    cy.get('.vue-dropdown-item.selected').should('have.length', 0)
  })

  it('should keep valid selected values after options has changed (object)', () => {
    cy.visit('/cypress/fixtures/options/change-options-with-object.html')
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown-item.selected').should('have.length', 1)

    cy.get('input').type('i')
    cy.get('.vue-dropdown-item.selected').should('have.length', 1)

    cy.get('input').type('{backspace}')
    cy.get('.vue-dropdown-item.selected').should('have.length', 1)

    cy.get('input').type('e')
    cy.get('.vue-dropdown-item.selected').should('have.length', 0)

    cy.get('input').type('{backspace}')
    cy.get('.vue-dropdown-item.selected').should('have.length', 0)
  })
})
