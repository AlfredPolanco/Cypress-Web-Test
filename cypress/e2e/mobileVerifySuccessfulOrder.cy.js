const HomePage = require('../pages/homePage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');
const LoginPage = require('../pages/loginPage');
const PaymentPage = require('../pages/paymentPage');
const ProductPage = require('../pages/productPage');
const SignUpPage = require('../pages/signUpPage');

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const loginPage = new LoginPage();
const signUpPage = new SignUpPage();
const checkoutPage = new CheckoutPage();
const paymentPage = new PaymentPage();

describe('Web Automation', function () {
	beforeEach(function () {
		cy.viewport(390, 844);
		cy.visit(Cypress.env('baseURL'));
		cy.url().should('eq', Cypress.env('baseURL'));
	});

	it('TC-02 - Verify Successful Order - Mobile', function () {
		//Verify Welcome page & Click on Products Page
		homePage.verifyWelcomeHeader();
		homePage.clickProductHeader();

		// Verify Products page & choose 3rd product from the list
		productPage.verifyProductPage();
		productPage.clickOnThirdProduct();
		productPage.verifyProductDetails();
		productPage.addQuantityAndProductToCart();

		//Proceed to Checkout and complete the Register flow
		cartPage.clickOnProceedToCheckoutButton();
		cartPage.clickOnRegisterLoginButton();
		loginPage.typeSignUpForm();
		signUpPage.fillSignUpForm();

		//Proceed to the cart and conform the order
		homePage.clickCartHeader();
		cartPage.clickOnProceedToCheckoutButton();
		checkoutPage.placeOrder();
		paymentPage.fillPaymentForm();

		//Logout
		homePage.clickSignUpLoginHeader();
	});
});
