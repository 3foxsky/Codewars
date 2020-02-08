'use strict';
const squareDigits = num => parseInt(num.toString().split('').map((e) => e * e).join(''));

console.log(squareDigits(9414));

// Tests
// Test.assertEquals(squareDigits(9119), 811181);
