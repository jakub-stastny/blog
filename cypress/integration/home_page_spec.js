describe('Visiting the home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Does not redirect', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
      expect(location.hash).to.be.empty
      expect(location.search).to.be.empty
    })
  })

  it('Sets the page title', () => {
    cy.title().should('include', "Jakub's blog")
  })

  it('Shows the header', () => {
    cy.get('header').
      should('contain', 'Jakub Šťastný')
  })

  it('Shows the footer', () => {
    cy.get('footer').
      should('contain', 'Posts').
      should('contain', 'About me').
      should('contain', 'Subscribe')
  })

  // TODO
  // it('Shows the list of posts', () => {
  //   cy.get('article').each((shortPost) => {
  //     console.log(shortPost)
  //   })
  // })
})
