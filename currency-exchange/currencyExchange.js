const axios = require('axios');
require ('dotenv').config();

const API_KEY = process.env.FIXER_API_KEY;
const BASE_URL = 'http://data.fixer.io/api;';

async function fetchExchangeRates(baseCurrency) {
  try {
    const response = await axios.get(`${BASE_URL}/latest`, {
      params: {
        access_key: API_KEY,
        base: baseCurrency
      }
    });
    return response.data.rates;
  } catch (error) {
    throw new Error(`Failed to fetch exchange rates: ${error.message}`);
  }
}

