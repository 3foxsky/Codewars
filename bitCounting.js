'use strict';
// Bit counting
const countBits = n => n.toString(2).split('0').join('').length;

console.log(countBits(10));
// Tests
/*
Test.assertEquals(countBits(0), 0);
Test.assertEquals(countBits(4), 1);
Test.assertEquals(countBits(7), 3);
Test.assertEquals(countBits(9), 2);
Test.assertEquals(countBits(10), 2);
*/
