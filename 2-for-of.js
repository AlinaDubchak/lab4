'use strict';

const sum = (...args) => {
  let Sum = 0;
  for (const i of args) {
    Sum+=i;
  }
 
  return Sum;
};

console.log(sum(5,2,9));

module.exports = { sum };
