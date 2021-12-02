describe('This test is for navigate', () => {
  it('Test to Navigate to Friends Details', () => {
    cy.visit('/');
    cy.get('button').contains('Select').click();
    cy.url().should('eq', 'http://localhost:3000/friends/id');
  });
});
