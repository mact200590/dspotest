describe('Check to access the site', () => {
  it('Access the site', () => {
    cy.visit('/')
    cy.url().should('eq','http://localhost:3000/')
  });
});
