'use strict';
//Write a function that implements filtering in array
//const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

function filterFalsyValues(values) {
  let filterArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      filterArray.push(values[i]);
    }
  }
  return filterArray;
}

console.log(filterFalsyValues([null, true, {}, { name: 'Elon' }, '', NaN, 0]));
