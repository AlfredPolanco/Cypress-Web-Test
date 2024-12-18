// CheckoutPage.js
class CheckoutPage {
  constructor() {
    // Define locators
    this.commentBox = '.form-control';
    this.placeOrderButton = ':nth-child(7) > .btn';
  }

  // Define actions
  typeComment(comment = 'I’m loving this website!') {
    cy.get(this.commentBox).type(comment);
  }

  clickOnPlaceOrderButton() {
    cy.get(this.placeOrderButton)
      .should('be.visible')
      .click();
  }

  placeOrder(comment = 'I’m loving this website!') {
    this.typeComment(comment);
    this.clickOnPlaceOrderButton();
  }
}

module.exports = CheckoutPage;
