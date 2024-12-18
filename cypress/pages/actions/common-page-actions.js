import { commonPageElements } from '../elements/common-page-elements';

export function verifyAccountCreated() {
	cy.get(commonPageElements.accountCreated.selector).should('be.visible');
}

export function clickOnContinueButton() {
	cy.get(commonPageElements.continueButton.selector).click();
}
