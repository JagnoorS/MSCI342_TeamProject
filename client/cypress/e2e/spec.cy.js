describe('Page Render Test', () => {
  it('Can view sign in page', () => {
    cy.visit('/SignIn');
    cy.contains("Login");
  })
})