'use strict';
// Binary array to number
const binaryArrayToNumber = arr => {
  let binary = arr.toString().replace(/,/g,'');
  return  parseInt(binary, 2)
};
// Tests
/*
describe("One's and Zero's", () => {

  it("Example tests", () => {
      Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
      Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
      Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
      Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
  });

});
*/
