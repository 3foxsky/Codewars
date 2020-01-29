'use strict';
const squareDigits = num => parseInt(num.toString().split('').map((e) => e * e).join('')); //string => num

console.log(squareDigits(322));

// Tests
// Test.assertEquals(squareDigits(9119), 811181);
