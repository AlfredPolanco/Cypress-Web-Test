import { mockData } from '../../support/user-data';
import { paymentPageElements } from '../elements/payment-page-elements';

function clickOnPayAndConfirmOrderButton() {
	cy.get(paymentPageElements.payAndConfirmOrderButton.selector)
		.should('be.visible')
		.click();
}

export function fillPaymentForm() {
	cy.get(paymentPageElements.nameOnCardInput.selector).type(
		mockData.testData.fullName
	);
	cy.get(paymentPageElements.cardNumberInput.selector).type(
		mockData.testData.creditCard
	);
	cy.get(paymentPageElements.cardCVVInput.selector).type(
		mockData.testData.creditCardCVV
	);
	cy.get(paymentPageElements.cardExpDateMonth.selector).type(
		mockData.testData.creditCardMonth
	);
	cy.get(paymentPageElements.cardExpDateYear.selector).type(
		mockData.testData.creditCardYear
	);
	clickOnPayAndConfirmOrderButton();
	verifyOrderPlaced();
}

function verifyOrderPlaced() {
	cy.get(paymentPageElements.orderPlaced.selector).should('be.visible');
}
