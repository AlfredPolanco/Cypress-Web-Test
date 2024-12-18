import { fillSignUpForm } from '../pagesObjects/actions/sign-up-page-actions';
import { fillPaymentForm } from '../pagesObjects/actions/payment-page-actions';
import { clickOnProceedToCheckoutButton } from '../pagesObjects/actions/cart-page-actions';
import { placeOrder } from '../pagesObjects/actions/checkout-page-actions';
import { clickOnContinueButton } from '../pagesObjects/actions/common-page-actions';
import { fillAndSubmitContactUsForm } from '../pagesObjects/actions/contact-us-page-actions';
import {
	fillLoginForm,
	typeSignUpForm
} from '../pagesObjects/actions/login-page-actions';
import {
	addQuantity,
	clickOnAddToCartButton,
	addProductToCart
} from '../pagesObjects/actions/product-page-actions';
import {
	navigateToHalfWayPage,
	clickOnViewProduct,
	clickOnSignUpLoginHeader,
	clickOnCartHeader,
	clickOnContactUSHeader
} from '../pagesObjects/actions/home-page-actions';

describe('Web Automation', function () {
	beforeEach(function () {
		cy.visit(Cypress.env('baseURL'));
		cy.url().should('eq', Cypress.env('baseURL'));
	});

	it('TC-01 -  Navigate and Add Product to Cart', function () {
		navigateToHalfWayPage();
		clickOnViewProduct();
		addQuantity();
		clickOnAddToCartButton();
	});

	it('TC-02 - Checkout Process', function () {
		clickOnSignUpLoginHeader();
		typeSignUpForm();
		fillSignUpForm();
		addProductToCart();
		clickOnCartHeader();
		clickOnProceedToCheckoutButton();
		placeOrder();
		fillPaymentForm();
		clickOnContinueButton();
		clickOnSignUpLoginHeader();
	});

	it('TC-03 - User Authentication and Contact Form', function () {
		clickOnSignUpLoginHeader();
		fillLoginForm();
		clickOnContactUSHeader();
		fillAndSubmitContactUsForm();
		clickOnSignUpLoginHeader();
	});
});
