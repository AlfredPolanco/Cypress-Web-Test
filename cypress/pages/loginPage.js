// LoginPage.js
import { mockData } from '../support/user-data';

class LoginPage {
	constructor() {
		// Define locators
		this.signUpNameInputBox = '[data-qa="signup-name"]';
		this.signUpEmailInputBox = '[data-qa="signup-email"]';
		this.signUpButton = '[data-qa="signup-button"]';
		this.loginEmailInputBox = '[data-qa="login-email"]';
		this.loginPasswordInputBox = '[data-qa="login-password"]';
		this.loginButton = '[data-qa="login-button"]';
	}

	// Define actions
	typeSignUpForm() {
		cy.get(this.signUpNameInputBox).type(mockData.testData.firstName);
		cy.get(this.signUpEmailInputBox).type(mockData.testData.email);
		this.clickOnSignUpButton();
	}

	fillLoginForm() {
		cy.get(this.loginEmailInputBox).type(mockData.testData.email);
		cy.get(this.loginPasswordInputBox).type(mockData.testData.password);
		this.clickOnLoginButton();
	}

	clickOnSignUpButton() {
		cy.get(this.signUpButton).should('be.visible').click();
	}

	clickOnLoginButton() {
		cy.get(this.loginButton).should('be.visible').click();
	}
}

module.exports = LoginPage;
