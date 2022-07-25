Array.prototype.forEachPolyfill = function forEachPolyfill(callback, context) {
  console.log(context)
  for(let i=0;i<this.length;i++) {
    callback.call(context, this[i], i)
  }
}

function f() {
  const array1 = ['a', 'b', 'c'];
  array1.forEachPolyfill((element, i) => {
    console.log(element, i, this)
  }, this);
}

const obj = {
  a: 10
}

f.call(obj)