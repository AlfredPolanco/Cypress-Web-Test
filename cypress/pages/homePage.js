// HomePage.js
class HomePage {
	constructor() {
		this.welcomeHeader = '#slider-carousel';
		this.viewProduct =
			':nth-child(24) > .product-image-wrapper > .choose > .nav > li > a';
		this.productHeader = '.shop-menu > .nav > :nth-child(2) > a';
		this.cartHeader = '.shop-menu > .nav > :nth-child(3) > a';
		this.signUpLoginHeader = '.shop-menu > .nav > :nth-child(4) > a';
		this.contactUsHeader = '.nav > :nth-child(9)';
	}

	verifyWelcomeHeader() {
		cy.url().should('eq', Cypress.env('baseURL'));
	}
	clickViewProduct() {
		cy.get(this.viewProduct).should('be.visible').click();
	}

	clickProductHeader() {
		cy.get(this.productHeader).should('be.visible').click();
	}

	clickCartHeader() {
		cy.get(this.cartHeader).should('be.visible').click();
	}

	clickSignUpLoginHeader() {
		cy.get(this.signUpLoginHeader).should('be.visible').click();
	}

	clickContactUsHeader() {
		cy.get(this.contactUsHeader).should('be.visible').click();
	}
}

module.exports = HomePage;
