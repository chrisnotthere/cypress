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

})

