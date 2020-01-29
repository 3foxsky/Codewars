'use strict';
const squareDigits = num => num.toString().split('').map((e) => e * e).join('');

console.log(squareDigits(322));

// Tests
// Test.assertEquals(squareDigits(9119), 811181);
