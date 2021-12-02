describe('This is to api return the data', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('The api should be return array of friends', () => {
    cy.request('https://private-5bdb3-friendmock.apiary-mock.com/friends').then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.eq(6)
        expect(response.body[0].first_name).to.eq('Jeremy');
      }
    );
  });
  it('<FriendsContainer> should render data', () => {
    cy.get('[data-testid=container-list]').should('exist',true)
    cy.get('[data-testid=item-list]').should('have.length',6)
  });
});
