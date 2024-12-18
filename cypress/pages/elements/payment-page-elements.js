const nameOnCardInput = {
	selector: '[data-qa="name-on-card"]'
};

const cardNumberInput = {
	selector: '[data-qa="card-number"]'
};

const cardCVVInput = {
	selector: '[data-qa="cvc"]'
};

const cardExpDateMonth = {
	selector: '[data-qa="expiry-month"]'
};

const cardExpDateYear = {
	selector: '[data-qa="expiry-year"]'
};

const payAndConfirmOrderButton = {
	selector: '[data-qa="pay-button"]'
};

const orderPlaced = {
	selector: '[data-qa="order-placed"] > b'
};

export const paymentPageElements = {
	nameOnCardInput,
	cardNumberInput,
	cardCVVInput,
	cardExpDateMonth,
	cardExpDateYear,
	payAndConfirmOrderButton,
	orderPlaced
};
