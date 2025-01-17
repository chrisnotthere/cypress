/// <reference types="cypress" />

describe('habit dashboard', () => {

  beforeEach(() => {
    cy.visit('/habits')
  })

  it('should display modal when add button is clicked', () => {
    cy.contains('button', 'Add').click()
    cy.contains('div', 'Add a new habit')
      .should('be.visible')
  })

  it('should display habit card when new habit is added', () => {
    cy.contains('button', 'Add').click()
    cy.get('input[placeholder="Habit"]').type('test habit')
    cy.contains('Save Changes').click()
    cy.contains('div', 'test habit')
      .should('be.visible')
      .and('have.class', 'HabitCard__habit-container')
  })

  it('should toggle icon when habit card is clicked', () => {
    cy.contains('button', 'Add').click()
    cy.get('input[placeholder="Habit"]').type('test habit')
    cy.contains('Save Changes').click()
    cy.get('[src="/static/media/close.fa7e5ead.svg"]')
      .should('be.visible')
    cy.contains('test habit').click()
    cy.get('[src="/static/media/check.9e8832df.svg"]')
      .should('be.visible')
  })
})
