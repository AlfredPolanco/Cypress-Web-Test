// ProductPage.js
import { mockData } from '../support/user-data';

class ProductPage {
	constructor() {
		// Define locators
		this.quantityBox = '#quantity';
		this.addToCartButton = ':nth-child(5) > .btn';
		this.viewCartButton = 'u';
		this.itemAddedToCartModal = '.modal-content';
		this.continueShoppingButton = '.modal-footer > .btn';
		this.thirdProduct =
			'div:nth-child(5) > .product-image-wrapper > .choose > .nav';
		this.productPageImage = '#sale_image';
		this.productDetail = '.product-information';
		this.productPrice = ':nth-child(5) > span';
	}

	// Define actions
	verifyProductPage() {
		cy.get(this.productPageImage).should('be.visible');
	}

	clickOnThirdProduct() {
		cy.get(this.thirdProduct).should('be.visible').click();
	}
	verifyProductDetails() {
		cy.get(this.productPrice).should('be.visible');
		cy.get(this.productDetail).should('be.visible');
	}

	addQuantityAndProductToCart() {
		this.addQuantity();
		this.clickOnAddToCartButton();
		this.clickOnViewCartButton();
	}

	addQuantity() {
		cy.get(this.quantityBox)
			.should('be.enabled')
			.clear()
			.type(mockData.testData.randomNumber);
	}

	clickOnAddToCartButton() {
		cy.get(this.addToCartButton).click();
		this.checkAddedToCartModal();
	}

	checkAddedToCartModal() {
		cy.get(this.itemAddedToCartModal).should('be.visible');
	}

	clickOnContinueShoppingButton() {
		cy.get(this.continueShoppingButton).click();
	}

	clickOnViewCartButton() {
		cy.get(this.itemAddedToCartModal).should('be.visible');
		cy.get(this.viewCartButton).click();
	}
}

module.exports = ProductPage;
