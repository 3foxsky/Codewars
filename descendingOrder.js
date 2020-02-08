
const descendingOrder = num => parseInt(String(num).split("").sort((a,b) => a - b).reverse().join(""));

console.log(descendingOrder(012));

// tests
// node v6.110
// Test.assertEquals(descendingOrder(0), 0)
// Test.assertEquals(descendingOrder(1), 1)
// Test.assertEquals(descendingOrder(123456789), 987654321)
