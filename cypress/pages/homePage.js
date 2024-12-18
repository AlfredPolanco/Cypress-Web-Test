// HomePage.js
class HomePage {
  constructor() {
    this.viewProduct = {
      selector: ':nth-child(24) > .product-image-wrapper > .choose > .nav > li > a'
    };
    this.productHeader = {
      selector: '.shop-menu > .nav > :nth-child(2) > a'
    };
    this.cartHeader = {
      selector: '.shop-menu > .nav > :nth-child(3) > a'
    };
    this.signUpLoginHeader = {
      selector: '.shop-menu > .nav > :nth-child(4) > a'
    };
    this.contactUsHeader = {
      selector: '.nav > :nth-child(9)'
    };
  }

  clickViewProduct() {
    cy.get(this.viewProduct.selector).should('be.visible').click();
  }

  clickProductHeader() {
    cy.get(this.productHeader.selector).should('be.visible').click();
  }

  clickCartHeader() {
    cy.get(this.cartHeader.selector).should('be.visible').click();
  }

  clickSignUpLoginHeader() {
    cy.get(this.signUpLoginHeader.selector).should('be.visible').click();
  }

  clickContactUsHeader() {
    cy.get(this.contactUsHeader.selector).should('be.visible').click();
  }
}

module.exports = HomePage;