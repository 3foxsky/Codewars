'use strict';
const palindrome = str => {
  return str == str.toLowerCase().split('').reverse().join('')
}
console.log(palindrome('aoloa'));
