'use strict';
// Disemvowel trolls
const disemvowel = str => str.replace(/[aeiou]/gi, ''); // gi => i = (ignores case of [a-zA-Z])

let str = "This website is for losers LOL!";

console.log(disemvowel(str));
// Tests
/*
Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")
*/
