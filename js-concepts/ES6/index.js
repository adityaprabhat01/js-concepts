console.log('JS loaded')

// let and const

// ES5
var name5 = 'Aditya Prabhat'
var age5 = 30
name5 = 'Aditya'
console.log(name5)

// ES6
const name6 = 'Aditya Prabhat' // immutable
let age6 = 30
// name6 = 'Aditya'

/*
  var is function scoped
  whereas let and const are
  block scoped
*/

// ES5
// variable can be accessed before definition
function driversLicence5 (passsedTest) {
  if(passsedTest){
    var fname = 'Aditya'
    var yob = 1990
  }
  // function scope, accessible outside if block
  console.log(fname + ' ' + yob)
}

driversLicence5(true)

// ES6
// variable can't be accessed before definition
function driversLicence6 (passsedTest) {
  if(passsedTest){
    let fname = 'Aditya'
    const yob = 1990 // const must to initialized on declaration
    // block scope can't be accessed outside of block
    console.log(fname + ' ' + yob)
  }
}

driversLicence6(true)

let i = 10

/* 
  i inside for loop is
  different from the i defined
  outside since let is block scoped.
  But var i will use the the same i
  in and out of the function.
*/
for(let i=0;i<5;i++){
  console.log(i)
}

console.log(i)

/////////////////////////////////////

// Blocks and IIFEs

// ES6
{
  const a = 1 // not
  let b = 2 // not
  var c = 3 // accessible
}


console.log(c)

// ES5

// (function() {
//   var x = 100
// })()

//////////////////////////////////////

// Strings

let fname = 'Aditya'
let lname = 'Prabhat'
const yob = 1990
function calcAge(year) {
  return 2020 - year
}

// ES5
console.log('This is ' + fname + ' ' + lname + ' ' + yob + ' ' + calcAge(yob))

// ES6 template literals
console.log(`This is ${fname} ${lname} ${yob} ${calcAge(yob)}`)

const n = `${fname} ${lname}`
console.log(n.startsWith('A'))
console.log(n.endsWith('at'))
console.log(n.includes('ra'))
console.log(`${fname}`.repeat(5))

//////////////////////////////////////

// Arrow function

const years = [1993, 1992, 1965, 2003]

// ES5
var ages5 = years.map(function(el) {
  return 2020 - el
})
console.log(ages5)

// ES6
const ages6 = years.map((el) => {
  return 2020 - el
})
console.log(ages6)

// this keyword in arrow function


// ES6
// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//       document.querySelector('.green').addEventListener('click', () => {
//           var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//           alert(str);
//       });
//   }
// }
// box6.clickMe();
// const box66 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//       document.querySelector('.green').addEventListener('click', () => {
//           var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//           alert(str);
//       });
//   }
// }
// box66.clickMe();

function Person(name) {
  this.name = name
}

// ES5
Person.prototype.myFriends5 = function(friends) {
  /*
    here 'this' points to the object having
    name 'John', it points to 'john' object as
    myFriends5 is called as method to it. But
    'this' inside callback function to map points
    to window object because it is not a method
    call attached to an object.
    Therefore, 'this' is bind that method.
  */
  var arr = friends.map(function(el) {
     return this.name + ' is friends with ' + el
  }.bind(this))
  
  console.log(arr)
}

var friends = ['Bob', 'Jane', 'Mark']
new Person('John').myFriends5(friends)

// ES6
Person.prototype.myFriends6 = function(friends) {
  /*
    Arrow function already binds 'this'
    to the method that calls the outer function.
  */

  //  var _this = this
  var arr = friends.map(el => `${this.name} is friends with ${el}`)
  console.log(arr)
}

new Person('Mike').myFriends6(friends)


//////////////////////////////////////////////////

// Destructuring

// Also used to return multiple values from a function

// ES5
var john = ['John', 26]
// var name = john[0]
// var age = john [1]

// ES6
const [name, year] = john
console.log(name, year)

///////////////////////////////////////////////////

// Array

// ES5
var nums = [1,2,3,4,5]
Array.prototype.slice.call(nums)
nums.forEach(function(num) {
  console.log(num + 1)
})

// ES6
// Array.form to construct array

// Array methods




/////////////////////////////////////////////////////

// Spread Operator

var x = [1,2,3,4,5]
function addOne(a, b, c, d, e) {
	return a + b + c + d + e
}
// ES5
addOne.apply(void 0, x);

// ES6
addOne(...x)