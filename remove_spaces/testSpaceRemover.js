const { spaceRemover } = require('./spaceRemover');

const testString = "Hey, this is a test string!";
console.log(`Original string: ${testString}`);
console.log(`Formatted string: ${spaceRemover(testString)}`);