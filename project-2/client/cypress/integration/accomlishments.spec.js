/// <reference type="cypress" />

describe('Accomplishments Dashboard', () => {
  beforeEach(() => {
    cy.visit('/accomplishments')
  })

  it('should display inappropriate content error when text or title includes giraffe', () => {
    cy.get('[placeholder="Title"]').type('I saw a panda')
    cy.get('[placeholder="My accomplishment..."]').type('I saw a giraffe')
    cy.get('[type="checkbox"]').click()
    cy.get('button').click()
    cy.get('p').should('contain', 'Your content is not appropriate')
  })

  it('should display inappropriate content error when text or title includes giraffe, with mock', () => {

    cy.intercept('POST', 'http://localhost:4000', (req) => {
      req.reply((res) => {
        res.send({
          msg: "Your content is not appropriate"
        })
      })
    })

    cy.get('[placeholder="Title"]').type('I saw a panda')
    cy.get('[placeholder="My accomplishment..."]').type('I saw a giraffe')
    cy.get('[type="checkbox"]').click()
    cy.get('button').click()
    cy.get('p').should('contain', 'Your content is not appropriate')
  })
})
