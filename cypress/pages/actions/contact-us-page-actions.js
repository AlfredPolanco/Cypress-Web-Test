import { mockData } from '../../support/user-data';
import { contactUsPageElements } from '../elements/contact-us-page-elements';

export function fillAndSubmitContactUsForm() {
	cy.get(contactUsPageElements.nameInputBox.selector).type(
		mockData.testData.firstName
	);
	cy.get(contactUsPageElements.emailInputBox.selector).type(
		mockData.testData.email
	);
	cy.get(contactUsPageElements.subjectInputBox.selector).type(
		'Requesting information about order #321'
	);
	cy.get(contactUsPageElements.messageInputBox.selector).type(
		'I would like to know the status of the order #321'
	);
	clickOnSubmitButton();
}

function clickOnSubmitButton() {
	cy.get(contactUsPageElements.submitButton.selector)
		.should('be.visible')
		.click();
}
