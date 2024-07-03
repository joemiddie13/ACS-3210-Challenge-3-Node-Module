const { getRandomInt } = require('./randomNumber');

const min = 1;
const max = 1000;

console.log(`A random number between ${min} and ${max} is`, getRandomInt(min, max));