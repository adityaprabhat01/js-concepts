function foo() {
  console.log(this)
  console.log(this.a)
}

const obj2 = {
  a: 42,
  foo: foo
}

const obj1 = {
  a: 2,
  obj2: obj2
}

//obj1.obj2.foo()
//obj2.foo()

var a = "oops, global";

// points to global
const bar = obj2.foo;
//bar();

//setTimeout(obj2.foo, 1000)

const obj = {
  a: "explicit binding"
}

//foo.call(obj)


function sum(num) {
  console.log(this, arguments)
  return this.a + num
}

const obj3 = {
  a: 3
}

const x = function() {
  return sum.apply(obj3, arguments)
}

//const x1 = x(4)
//console.log(x1)

// create a wrapper to bind obj to this
function bind(fn, obj) {
  console.log(arguments)
  return function() {
    console.log(arguments)
    return fn.apply(obj, arguments)
  }
}

const b1 = bind(sum, obj3, 15)
console.log(b1)
console.log(b1(11))

// bind
// const f = sum.bind(obj3, 11)
// console.log(f(15))

const arr = [1,2,3]
function print(el) {
  console.log(el, this.a)
}
/**
 * Internally forEach uses call, apply that binds
 * object to this
 */
//arr.forEach(print, obj3)

// new operator
/**
 * Creates an object
 * Attaches prototype to the object
 * The newly constructed object is set as this binding for that function call
 * Returns the newly constructed object
 */
function checkNew(a) {
  this.a = a;
}

const n = new checkNew(10);
//console.log(n)

