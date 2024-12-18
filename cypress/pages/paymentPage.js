// PaymentPage.js
import { mockData } from '../support/user-data';

class PaymentPage {
  constructor() {
    // Define locators
    this.nameOnCardInput = '[data-qa="name-on-card"]';
    this.cardNumberInput = '[data-qa="card-number"]';
    this.cardCVVInput = '[data-qa="cvc"]';
    this.cardExpDateMonth = '[data-qa="expiry-month"]';
    this.cardExpDateYear = '[data-qa="expiry-year"]';
    this.payAndConfirmOrderButton = '[data-qa="pay-button"]';
    this.orderPlaced = '[data-qa="order-placed"] > b';
  }

  // Define actions
  fillPaymentForm() {
    cy.get(this.nameOnCardInput).type(mockData.testData.fullName);
    cy.get(this.cardNumberInput).type(mockData.testData.creditCard);
    cy.get(this.cardCVVInput).type(mockData.testData.creditCardCVV);
    cy.get(this.cardExpDateMonth).type(mockData.testData.creditCardMonth);
    cy.get(this.cardExpDateYear).type(mockData.testData.creditCardYear);
    this.clickOnPayAndConfirmOrderButton();
    this.verifyOrderPlaced();
  }

  clickOnPayAndConfirmOrderButton() {
    cy.get(this.payAndConfirmOrderButton)
      .should('be.visible')
      .click();
  }

  verifyOrderPlaced() {
    cy.get(this.orderPlaced)
      .should('be.visible');
  }
}

module.exports = PaymentPage;
