// Importing the lodash library using the _ alias
const _ = require('lodash');

// Writing sample data
const numbers = [1,2,3,4,5,6,7,8,9,10]

// Use components of lodash
const sum = _.sum(numbers);
console.log(`Sum: ${sum}`);

const shuffle = _.shuffle(numbers);
console.log(`Shuffle: ${shuffle}`);

const indexGreaterThanFive = _.findIndex(numbers, (num)=> num > 5)
console.log(`IndexGreaterThanFive: ${indexGreaterThanFive}`);