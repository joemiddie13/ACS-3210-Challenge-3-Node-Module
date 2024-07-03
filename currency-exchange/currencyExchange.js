const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.FIXER_API_KEY;
const BASE_URL = 'http://data.fixer.io/api';

if (!API_KEY) {
  throw new Error('API key not found. Please set FIXER_API_KEY in your .env file.');
}

console.log(`Using Fixer API key: ${API_KEY}`); // Debugging line to ensure API key is loaded

/**
 * Fetches the latest exchange rates from Fixer.
 * @param {string} baseCurrency - The base currency for the exchange rates.
 * @returns {Promise<object>} - A promise that resolves to an object containing exchange rates.
 */
async function fetchExchangeRates(baseCurrency) {
  try {
    const response = await axios.get(`${BASE_URL}/latest`, {
      params: {
        access_key: API_KEY,
        symbols: 'USD,EUR,GBP,INR' // Specify the symbols you are interested in
      }
    });
    console.log('API Response:', response.data); // Debugging line
    if (response.data && response.data.rates) {
      return response.data.rates;
    } else {
      throw new Error('Invalid response structure');
    }
  } catch (error) {
    console.error('Error fetching exchange rates:', error.message);
    throw new Error('Failed to fetch exchange rates');
  }
}

/**
 * Converts an amount from one currency to another.
 * @param {number} amount - The amount to convert.
 * @param {string} fromCurrency - The currency code of the source currency.
 * @param {string} toCurrency - The currency code of the target currency.
 * @returns {Promise<number>} - A promise that resolves to the converted amount.
 */
async function convertCurrency(amount, fromCurrency, toCurrency) {
  const rates = await fetchExchangeRates(fromCurrency);
  console.log('Fetched rates:', rates); // Debugging line
  const rate = rates[toCurrency];
  if (!rate) {
    throw new Error(`Unsupported conversion: ${fromCurrency} to ${toCurrency}`);
  }
  return amount * rate;
}

module.exports = {
  convertCurrency
};