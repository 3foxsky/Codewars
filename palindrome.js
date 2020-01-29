'use strict';
const palindrome = str => {
  return str == str.toLowerCase().split('').reverse().join('')
}
console.log(palindrome('aoloa'));


const fizzBuzz = () => {
  for (var i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzBuzz')
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
}
// console.log(fizzBuzz());
var a = [...Array(100).keys()]
// console.log(a);
var Dog  = {
  color: 'black',
  age: 1,
  name: 'Thom'
}

var cat = Dog.prototype.color;
console.log(cat);
