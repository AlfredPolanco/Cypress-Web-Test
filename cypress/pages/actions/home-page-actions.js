import { homePageElements } from '../elements/home-page-elements';

export function navigateToHalfWayPage() {
	cy.scrollTo(0, 4500);
}

export function clickOnViewProduct() {
	cy.get(homePageElements.viewProduct.selector).should('be.visible').click();
}

export function clickOnProductHeader() {
	cy.get(homePageElements.productHeader.selector).should('be.visible').click();
}

export function clickOnCartHeader() {
	cy.get(homePageElements.cartHeader.selector).should('be.visible').click();
}

export function clickOnSignUpLoginHeader() {
	cy.get(homePageElements.signUpLoginHeader.selector)
		.should('be.visible')
		.click();
}

export function clickOnContactUSHeader() {
	cy.get(homePageElements.contactUsHeader.selector)
		.should('be.visible')
		.click();
}
