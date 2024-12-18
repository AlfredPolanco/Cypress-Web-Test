import { checkoutPageElements } from '../elements/checkout-page-elements';

export function placeOrder() {
	typeComment();
	clickOnPlaceOrderButton();
}

function typeComment() {
	cy.get(checkoutPageElements.commentBox.selector).type(
		'Im loving this website!'
	);
}

function clickOnPlaceOrderButton() {
	cy.get(checkoutPageElements.placeOrderButton.selector)
		.should('be.visible')
		.click();
}
