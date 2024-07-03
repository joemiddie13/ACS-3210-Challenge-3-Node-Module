const { convertCurrency } = require('./currencyExchange');

// Defining the amount to convert and the currencies
const amount = 100;
const fromCurrency = 'USD';
const toCurrency = 'EUR';

// Calling the convertCurrency function and handling the result
convertCurrency(amount, fromCurrency, toCurrency)
  .then(convertedAmount => {
    console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
  })
  .catch(error => {
    console.error('Conversion error:', error.message);
  });