'use strict';
/*Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
word or phrase without a repeating letter.*/

function isogram(str) {
  str = str.toLowerCase();
  let len = str.length;
  let arr = str.split('');
  arr.sort();
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] === arr[i + 1]) return false;
  }
  return true;
}

console.log(isogram('Gayane'));
