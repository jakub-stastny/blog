describe('Visiting the home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Shows the header', () => {
    cy.get('header').
      should('contain', 'James C Russell')
    // cy.get('header').should('contain', 'On programming, Ruby, React.js, languages and life.')
  })

  it('Shows the footer', () => {
    cy.get('footer').
      should('contain', 'Posts')
  })

  it('Does not redirect', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
      expect(location.hash).to.be.empty
      expect(location.search).to.be.empty
    })
  })
})
