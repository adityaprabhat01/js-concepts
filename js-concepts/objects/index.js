console.log('js loaded')

// array, function, objects, date, wrapper for Numbers, Strings, Booleans are Objects

// constructor / prototype
/*
  every function is an  object.
  every object has a prototype property.
  every prototype has a constructor.
  constructor contains what is to be executed inside function.
  **Only constructor gets executed/accessed directly**
*/

var Person = function(name, yob, job) {
  this.name = name,
  this.yob = yob,
  this.job = job
  // this.calculateAge = function() {
  //   console.log(2020 - yob)
  // }
}

Person.prototype.calculateAge = function(yob) {
  console.log(2020 - yob)
}

var john = new Person('John', 1990, 'teacher')

console.log(john)
john.calculateAge(1984)


/* Object Create */

var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yob)
  }
}

/*
  Inherits from what we pass into
  the Object.create(), used to implement
  complex inheritance functions
*/

// method 1
var mike = Object.create(personProto)
mike.name = 'Mike'
mike.yob = 1984
mike.job = 'teacher'

// method 2
var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yob: { value: 1969 },
  job: { value: 'designer' }
})

// most popular : functional constructor