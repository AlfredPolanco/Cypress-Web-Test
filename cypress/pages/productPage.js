// ProductPage.js

class ProductPage {
  constructor() {
    // Define locators
    this.quantityBox = '#quantity';
    this.addToCartButton = ':nth-child(5) > .btn';
    this.viewCartButton = 'u';
    this.itemAddedToCartModal = '.modal-content';
    this.continueShoppingButton = '.modal-footer > .btn';
  }

  // Define actions
  addProductToCart() {
    this.clickOnProductHeader();
    this.clickOnViewProduct();
    this.addQuantity('30'); // Default quantity
    this.clickOnAddToCartButton();
    this.clickOnContinueShoppingButton();
  }

  addQuantity(quantity) {
    cy.get(this.quantityBox)
      .should('be.enabled')
      .clear()
      .type(quantity);
  }

  clickOnAddToCartButton() {
    cy.get(this.addToCartButton).click();
    this.checkAddedToCartModal();
  }

  checkAddedToCartModal() {
    cy.get(this.itemAddedToCartModal).should('be.visible');
  }

  clickOnContinueShoppingButton() {
    cy.get(this.continueShoppingButton).click();
  }

  clickOnViewCartButton() {
    cy.get(this.itemAddedToCartModal).should('be.visible');
    cy.get(this.viewCartButton).click();
  }
}

module.exports = ProductPage;
