// PaymentPage
import { mockData } from '../support/user-data';

class SignUpPage {
	constructor() {
		// Locators
		this.genderOption = '#id_gender1';
		this.passwordInput = '[data-qa="password"]';
		this.birthDaySelect = '[data-qa="days"]';
		this.birthMonthSelect = '[data-qa="months"]';
		this.birthYearSelect = '[data-qa="years"]';
		this.firstNameInput = '[data-qa="first_name"]';
		this.lastNameInput = '[data-qa="last_name"]';
		this.addressInput = '[data-qa="address"]';
		this.countryInput = '[data-qa="country"]';
		this.stateInput = '[data-qa="state"]';
		this.cityInput = '[data-qa="city"]';
		this.zipCodeInput = '[data-qa="zipcode"]';
		this.mobilePhoneNumberInput = '[data-qa="mobile_number"]';
		this.createAccountButton = '[data-qa="create-account"]';
	}

	fillSignUpForm() {
		cy.get(this.genderOption).click();
		cy.get(this.passwordInput).type(mockData.testData.password);
		cy.get(this.birthDaySelect).select('1');
		cy.get(this.birthMonthSelect).select('January');
		cy.get(this.birthYearSelect).select('1998');
		cy.get(this.firstNameInput).type(mockData.testData.firstName);
		cy.get(this.lastNameInput).type(mockData.testData.lastName);
		cy.get(this.addressInput).type(mockData.testData.streetAddress);
		cy.get(this.countryInput).select('United States');
		cy.get(this.stateInput).type('Florida');
		cy.get(this.cityInput).type('Orlando');
		cy.get(this.zipCodeInput).type(mockData.testData.zipCode);
		cy.get(this.mobilePhoneNumberInput).type(mockData.testData.phoneNumber);
		cy.get(this.createAccountButton).click();
	}
}

module.exports = SignUpPage;
