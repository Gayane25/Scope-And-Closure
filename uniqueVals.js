'use strict';
//Given an array. Determine whether it consists only from uniques or not.
const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};
const nums = [26, 27, 26, 26, 28, 28, 29, 29, 30];
const uniqueVals = nums.filter(unique);

console.log(uniqueVals);
