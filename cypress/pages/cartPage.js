// CartPage.js
class CartPage {
  constructor() {
    // Define locators
    this.proceedToCheckoutButton = '.col-sm-6 > .btn';
    this.registerLoginButton = '.modal-body > :nth-child(2) > a > u';
  }

  // Define actions
  clickOnProceedToCheckoutButton() {
    cy.get(this.proceedToCheckoutButton)
      .should('be.visible')
      .click();
  }

  clickOnRegisterLoginButton() {
    cy.get(this.registerLoginButton)
      .should('be.visible')
      .click();
  }
}

module.exports = CartPage;