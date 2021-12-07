'use strict';
//Write a function redundant that takes in a string str and returns a function that returns str.
const redundant = function (str) {
  return function () {
    return str;
  };
};
redundant()();

const f1 = redundant('apple');
console.log(f1());
const f2 = redundant('pear');
console.log(f2());
const f3 = redundant('');
console.log(f3());
