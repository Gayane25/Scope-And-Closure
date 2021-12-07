//Create a function that implements partial sum
'use strict';

const sum = function (operand) {
  return function (operand2) {
    return operand + operand2;
  };
};
console.log(sum(1)(2));

const addOne = sum(1);
console.log(addOne(2));
const addTen = sum(10);
console.log(addTen(2));
console.log(addOne(4));
console.log(addTen(10));
