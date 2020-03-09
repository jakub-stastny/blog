describe('Visiting the home page', () => {
  beforeEach(() => {
    cy.visit('/posts/hello-world')
  })

  it('Does not redirect', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/posts/hello-world')
      expect(location.hash).to.be.empty
      expect(location.search).to.be.empty
    })
  })

  // it('Shows the post heading', () => {
  //   cy.get('article h1').
  //     should('contain', 'Hello world!')
  // })
})
