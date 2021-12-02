describe('Go back to the Friends List', () => {
  it('This test goBack button navigate to Home List', () => {
    cy.visit('/');
    cy.get('button').contains('Select').click();
    cy.get('button').contains('Go Back').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
