'use strict';
/*Write a function that returns an anonymous function, which transforms its input by adding a
particular suffix at the end.*/
const add_suffix = function (suffix) {
  return function (some) {
    return some + suffix;
  };
};
add_suffix()();

const add_ly = add_suffix('ly');
console.log(add_ly('hopeless'));
console.log(add_ly('total'));

const add_less = add_suffix('less');
console.log(add_less('fear'));
console.log(add_less('ruth'));
