/// <reference type="cypress" />

describe('Rewards Dashboard', () => {
  beforeEach(() => {
    cy.visit('/rewards')
  })

  it('should display a list of rewards', () => {
    cy.get('ul')
      .should('contain', '500 points for drinking 8 cups of water for 7 straight days')
      .and('contain', '850 points for fasting for 5 days straight')

  })

  // intercept the request to the rewards endpoint
  it('should display a list of rewards, with mock', () => {
    cy.intercept('GET', 'http://localhost:4000/rewards', { 
      fixture: 'rewards.json'
    }).as('getRewards')

    cy.visit('/rewards') // Reload the page to make sure the intercept takes effect

    cy.get('ul')
      .should('contain', '500 points for drinking 8 cups of water for 7 straight days')
      .and('contain', '850 points for fasting for 5 days straight')
  })
})
