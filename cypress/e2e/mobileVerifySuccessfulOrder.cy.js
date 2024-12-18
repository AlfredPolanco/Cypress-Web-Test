const HomePage = require('../pages/homePage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');
const LoginPage = require('../pages/loginPage');
const PaymentPage = require('../pages/paymentPage');
const ProductPage = require('../pages/productPage');
const SignUpPage = require('../pages/signUpPage');

describe('Web Automation', function () {
	beforeEach(function () {
		cy.viewport(390, 844);
		cy.visit(Cypress.env('baseURL'));
		cy.url().should('eq', Cypress.env('baseURL'));
	});

	it('TC-01 -  TC01 - Verify Successful Order - Mobile', function () {
		const homePage = new HomePage();

		//Verify Welcome page & Click on Products Page
		homePage.verifyWelcomeHeader();
		homePage.clickProductHeader();

		// Verify Products page & choose 3rd product from the list
		const productPage = new ProductPage();
		productPage.verifyProductPage();
		productPage.clickOnThirdProduct();
		productPage.verifyProductDetails();
		productPage.addQuantityAndProductToCart();

		//Proceed to Checkout and complete the Register flow
		const cartPage = new CartPage();
		cartPage.clickOnProceedToCheckoutButton();
		cartPage.clickOnRegisterLoginButton();

		const loginPage = new LoginPage();
		loginPage.typeSignUpForm();

		const signUpPage = new SignUpPage();
		signUpPage.fillSignUpForm();

		//Proceed to the cart and conform the order
		homePage.clickCartHeader();
		cartPage.clickOnProceedToCheckoutButton();
		const checkoutPage = new CheckoutPage();
		checkoutPage.placeOrder();

		const paymentPage = new PaymentPage();
		paymentPage.fillPaymentForm();

		//Logout
		homePage.clickSignUpLoginHeader();
	});
});
