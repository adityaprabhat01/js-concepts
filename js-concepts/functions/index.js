console.log('js loaded')

/*
  A function is:
  instance of Object type
  behaves like any other object
  store funtions in a variable
  pass a function as an argument to another function
  return function from function
*/

// callback function

// first create a generic function

const years = [1990, 1965, 1937, 2005, 1998]

function generate(arr, callback) {
  let newArray = []
  for(let i=0;i<arr.length;i++) {
    newArray.push(callback(arr[i]))
  }
  return newArray
}

// second create callback function

function age(num) {
  return 2020 - num
}

function isAdult(num) {
  return num > 18 ? true : false
}

// third pass callback into generic function

const a =  generate(years, age)
const b = generate(a, isAdult)

/*
  A function(generic) that does some job which
  depends, how to be done on some
  other function (callback function).
  Callback function decides what exactly
  the output will be.
*/

 // return function from function
/*
 function arithmetic (op) {
  switch(op) {
    case 'add':
      return function(a, b) {
        return a + b
      }
    case 'sub':
      return function(a, b) {
        return a - b
      }
    case 'multiply':
      return function(a, b) {
        return a * b
      }
    case 'divide':
      return function(a, b) {
        return a > b ? a/b : b/a
      }
    default:
      return -1
  }
 }

const ad = arithmetic('add')(4,2)
const s = arithmetic('sub')(4,2)
const m = arithmetic('multiply')(4,2)
const d = arithmetic('divide')(4,2)
*/

// Immediately Invoked Function Expression

// (
//   function () {
//   let score = Math.random() * 10
//   console.log(score - x)
//   }
// )()

// Closure

function arithmetic (op) {
  return function (a,b) {
    switch(op) {
      case 'add':
        return a + b
      case 'sub':
        return a - b
      case 'multiply':
        return a * b
      case 'divide':
        return a > b ? a/b : b/a
      default:
        return -1
    }
  }
}

const ad = arithmetic('add')(4,3)

/*
 Closures are nothing but FUNCTIONS WITH PRESERVED DATA.
 Inner function can access the outer variable data because
 those variables are stored as property to functional scope.
 e.g.: normal functions accessing the outer variable data,
 inner functions accessing the parameters passed to the outer functions.
*/


//////////////////////////////////////////
// Rest Parameters

//ES5
function isFullAge5() {
  // console.log(arguments) // object
  var argsArr = Array.prototype.slice.call(arguments)
  argsArr.forEach(element => {
    console.log(2016 - element)
  });
}

// isFullAge5(1990, 1999, 1965)


// ES6

function isFullAge6(...years) {
  console.log(years) // array
}

isFullAge6(1990, 1999, 1965)


///////////////////////////////////////////
//Default Parameters

///////////////////////////////////////////
// MAPS

const question = new Map()
question.set('question', 'Which is your phone?')
question.set(1, 'Apple')
question.set(2, 'Samsung')
console.log(question.get(1))
// Many more functions to Maps

/*
if(question.has(2)){
  console.log(question.get(2))
}

question.forEach((Values, key) => {
  console.log(Values, key)
})
*/

// for(let [key, value] of question.entries()){}

//////////////////////////////////////////
// Classes

// ES5
var Person5 = function(name, yob, job) {
  this.name = name
  this.yob = yob
  this.job = job
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear - this.yob
  console.log(age)
}

var john5 = new Person5('John', 1990, 'Teacher')

// ES6
class Person6 {
  constructor(name, yob, job) {
    this.name = name
    this.yob = yob
    this.job = job
  }
  calculateAge() {
    var age = new Date().getFullYear - this.yob
    console.log(age)
  }
  static greeting() {
    console.log('Welcome')
  }
}

const john6 = new Person5('John', 1990, 'Teacher')


console.log(john5)
console.log(john6)
Person6.greeting()

var Athelete5 = function(name, yob, job, oGames, medals){
  Person5.call(this, name, yob, job)
  this.oGames = oGames
  this.medals = medals
}

Athelete5.prototype = Object.create(Person5.prototype)

var johnAthelete5 = new Athelete5('John', 1990, 'swimmer', 3, 10)


// ES6

class Athelete6 extends Person6 {
  constructor(name, yob, job, oGames, medals){
    super(name, yob, job)
    this.oGames = oGames
    this.medals = medals
  }
  wonMedal() {
    this.medals++
    console.log(this.medals)
  }
}

const johnAthelete6 = new Athelete6('John', 1990, 'swimmer', 3, 10)