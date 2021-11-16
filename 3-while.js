'use strict';

const sum = (...args) => {
  let Sum = 0;
  while (args.length > 0) {
    Sum += args.pop();
  }
  return Sum;
};

console.log(sum(1,2,3));

module.exports = { sum };
