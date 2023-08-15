/// <reference types="cypress" />

describe('Locators', () => {
  beforeEach(() => {
    cy.visit('/elements')
  })

  it('Locating elements with get', () => {
    // get all elements by tag name
    cy.get('button')

    // get all elements by class name
    cy.get('.btn-with-class')

    // get all specific classes
    cy.get('[class="Elements-btn btn-with-class more-btn-classes"]')

    // get all elements by id
    cy.get('[id="btn-with-id"]')
    cy.get('#btn-with-id')

    // get all elements by attribute name
    cy.get('[type="submit"]')

    // get all elements by tag name AND class name
    cy.get('button.Elements-btn')

    // get all elements by tag name AND class AND id
    cy.get('button.Elements-btn#btn-with-id')

    // get all elements by tag name AND class AND attribute
    cy.get('button.Elements-btn[type="submit"]')

    // get all elements with a specific data test id
    cy.get('[data-cy="btn-id-1"]')
    cy.getByTestId('btn-id-1')
  })

  // contains only gets the first element
  // get gets all elements

  it('Locating elements with contains', () => {
    // get element by text
    cy.contains('Unique Text')

    // get element by text
    cy.contains('Not Unique Text')

    // get element by text and tag name
    cy.contains('[type="submit"]', 'Not Unique Text')

    // get all elements by type and get one by text
    cy.get('[type="submit"]').contains('Not Unique Text')

    

  })

})

