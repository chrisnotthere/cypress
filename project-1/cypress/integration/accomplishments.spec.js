/// <reference types="cypress" />

describe('Accomplishment Dashboard', () => {
  beforeEach(() => {
    cy.visit('/accomplishments')
  })

  it('should show error if information is missing', () => {
    cy.get('input[data-cy="accomplishment-title-input"]')
      .type('My Test Accomplishment')
    cy.get('textarea[data-cy="accomplishment-input"]')
      .type('lorem ipsum 123...')
    cy.get('button.Accomplishment-btn').click()
    cy.contains('Complete the items above to continue')
      .should('be.visible')
  })

  it('should display validation component if all information is input', () => {
    cy.get('input[data-cy="accomplishment-title-input"]')
      .type('My Test Accomplishment')
    cy.get('textarea[data-cy="accomplishment-input"]')
      .type('lorem ipsum 123...')
    cy.get('input[type="checkbox"').check()
    cy.get('button.Accomplishment-btn').click()
    cy.contains('This Accomplisment was Successfully Submitted')
      .should('be.visible')
  })

  it('should return back to accomplishment dashboard with empty inputs when "Go Back" button is clicked', () => {
    cy.get('input[data-cy="accomplishment-title-input"]')
      .type('My Test Accomplishment')
    cy.get('textarea[data-cy="accomplishment-input"]')
      .type('lorem ipsum 123...')
    cy.get('input[type="checkbox"').check()
    cy.get('button.Accomplishment-btn').click()
    cy.contains('Go Back').click()
    cy.contains('h2', 'Accomplishment')
      .should('be.visible')
    cy.get('input[data-cy="accomplishment-title-input"]')
      .should('have.value', '')
    cy.get('textarea[data-cy="accomplishment-input"]')
      .should('have.value', '')
    cy.get('input[type="checkbox"').should('not.be.checked')
  })
})
