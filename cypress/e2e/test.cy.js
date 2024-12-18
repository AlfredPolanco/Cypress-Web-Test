const HomePage = require('../pages/homePage')

describe('Web Automation', function () {
  beforeEach(function () {
    cy.viewport(390, 844)
    cy.visit(Cypress.env('baseURL'));
    cy.url().should('eq', Cypress.env('baseURL'));
  });

  it('TC-01 -  Navigate and Add Product to Cart', function () {
    const homePage = new HomePage();
    homePage.clickViewProduct();
    // navigateToHalfWayPage();
    // clickOnViewProduct();
    // addQuantity();
    // clickOnAddToCartButton();
  });

  // it('TC-02 - Checkout Process', function () {
  //   clickOnSignUpLoginHeader();
  //   typeSignUpForm();
  //   fillSignUpForm();
  //   addProductToCart();
  //   clickOnCartHeader();
  //   clickOnProceedToCheckoutButton();
  //   placeOrder();
  //   fillPaymentForm();
  //   clickOnContinueButton();
  //   clickOnSignUpLoginHeader();
  // });

  // it('TC-03 - User Authentication and Contact Form', function () {
  //   clickOnSignUpLoginHeader();
  //   fillLoginForm();
  //   clickOnContactUSHeader();
  //   fillAndSubmitContactUsForm();
  //   clickOnSignUpLoginHeader();
  // });
});
