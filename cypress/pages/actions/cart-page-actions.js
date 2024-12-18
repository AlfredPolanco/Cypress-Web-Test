import { cartPageElements } from '../elements/cart-page-elements';

export function clickOnProceedToCheckoutButton() {
	cy.get(cartPageElements.proceedToCheckoutButton.selector)
		.should('be.visible')
		.click();
}

export function clickOnRegisterLoginButton() {
	cy.get(cartPageElements.registerLoginButton.selector)
		.should('be.visible')
		.click();
}
