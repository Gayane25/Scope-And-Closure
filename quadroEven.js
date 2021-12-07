'use strict';
//Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

function quadroEven(array) {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    newArr.push(Math.pow(array[i], 2));
    if (newArr[i] % 2 === 0) {
      sum += newArr[i];
      sum++;
    }
  }
  return sum;
}
console.log(quadroEven([4, 7, 6, 2, 5, 9, 10]));
