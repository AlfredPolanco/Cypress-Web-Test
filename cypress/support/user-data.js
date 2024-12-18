import { faker } from '@faker-js/faker';

const testData = {
	fullName: faker.person.fullName(),
	firstName: faker.person.firstName(),
	lastName: faker.person.lastName(),
	email: faker.internet.email({ firstName: faker.person.firstName() }),
	password: faker.internet.password({
		length: 10,
		pattern: /[A-Z-0-9!@#$%^&*()]/
	}),
	phoneNumber: faker.phone.number(),
	country: faker.location.country(),
	city: faker.location.city(),
	streetAddress: faker.location.streetAddress(false),
	zipCode: faker.location.zipCode(),
	creditCard: faker.finance.creditCardNumber(),
	creditCardCVV: faker.finance.creditCardCVV(),
	creditCardMonth: faker.helpers.fromRegExp('[1-12]'),
	creditCardYear: faker.helpers.rangeToNumber({ min: 2025, max: 2030 }),
	randomNumber: faker.number.int({ min: 1, max: 20 })
};

export const mockData = {
	testData
};
