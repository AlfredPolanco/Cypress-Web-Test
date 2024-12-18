import { productPageElements } from '../elements/product-page-elements';
import { clickOnProductHeader, clickOnViewProduct } from './home-page-actions';

export function addProductToCart() {
	clickOnProductHeader();
	clickOnViewProduct();
	addQuantity();
	clickOnAddToCartButton();
	clickOnContinueShoppingButton();
}

export function addQuantity() {
	cy.get(productPageElements.quantityBox.selector)
		.should('be.enabled')
		.clear()
		.type('30');
}

export function clickOnAddToCartButton() {
	cy.get(productPageElements.addToCartButton.selector).click();
	checkAddedToCartModal();
}

function checkAddedToCartModal() {
	cy.get(productPageElements.itemAddedToCartModal.selector).should(
		'be.visible'
	);
}

function clickOnContinueShoppingButton() {
	cy.get(productPageElements.continueShopping.selector).click();
}

export function clickOnViewCartButton() {
	cy.get(productPageElements.itemAddedToCartModal.selector).should(
		'be.visible'
	);
	cy.get(productPageElements.viewCartButton.selector).click();
}
