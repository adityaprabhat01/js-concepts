console.log('JS loaded')

// Bind, Call, Apply

let name = {
  fname: 'Aditya',
  lname: 'Prabhat',
}

let printFullName = function (place, state) {
  console.log(this.fname + ' ' + this.lname + ' form ' + place + ' ' + state)
}

// Function borrowing
// name becomes 'this' inside the function
// first parameter is 'this'
printFullName.call(name, 'Manipal', 'Karnataka')
printFullName.apply(name, ['Manipal', 'Karnataka'])

// returns copy of function with this method pointing
// to the object passed to it
let printMyName = printFullName.bind(name, 'Manipal', 'Karnataka')
// console.log(printMyName)
// printMyName()

// Currying
let multiply = function (x, y) {
  console.log(x * y)
}

// using Bind
let multiplyByTwo = multiply.bind(this, 2)
let multiplyByThree = multiply.bind(this, 3)
multiplyByTwo(4)
multiplyByThree(5)


// using Closure
let mult = function(x) {
  return function (y) {
    console.log(x * y)
  }
}

mult(2)(5)