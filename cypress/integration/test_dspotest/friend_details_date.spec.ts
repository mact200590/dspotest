describe("Ensure data of Fiends Details is properly shown as per ID API", () => {
  it("<FriendDetails/> should properly show", () => {
    cy.visit("/");
    cy.get("button").contains("Select").click();
    cy.get("[data-cy=card-container]").children().should("have.length", 2);
    cy.get("[data-cy=avatar]").should("exist");
    cy.contains("button","tex")
  });
});
