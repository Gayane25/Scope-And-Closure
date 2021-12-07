//Check whether string is palindrome, or not.
'use strict';

const palindrome = str => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return 'no palindrome';
    }
    return 'palindrome';
  }
};

console.log(palindrome('level'));
