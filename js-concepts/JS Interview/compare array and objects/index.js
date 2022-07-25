Array.prototype.equals = function(array) {
  if(!array) return false;
  if(this.length !== array.length) return false;
  for(let i=0;i<this.length;i++) {
    if(this[i] instanceof Array && array[i] instanceof Array) {
      if(!this[i].equals(array[i])) return false;
    } else if(this[i] !== array[i]) {
      return false;
    }
  }
  return true;
}

Object.defineProperty(Array.prototype, "equals", {enumerable: false});

console.log([1,2,3].equals([1,2,3]))
console.log([1,[2,3],[4,5]].equals([1,[2,3],[4,5]]));
console.log([2,2,3].equals([1,2,3]))
console.log([1,[4,5],[1,2,3,4]].equals([3,4],1,[1,3,4]))

Object.prototype.equals = function(obj) {
  for(propName in this) {
    if(this.hasOwnProperty(propName) !== obj.hasOwnProperty(propName)) {
      return false;
    } else if(typeof this[propName] !== typeof obj[propName]) {
      return false;
    }
  }
  for(propName in obj) {
    if(obj.hasOwnProperty(propName) !== this.hasOwnProperty(propName)) {
      return false;
    } else if(typeof obj[propName] !== typeof this[propName]) {
      return false;
    }

    if(this[propName] instanceof Array && obj[propName] instanceof Array) {
      if(!this[propName].equals(obj[propName])) {
        return false;
      } else if(this[propName] instanceof Object && obj[propName] instanceof Object) {
        if(!this[propName].equals(obj[propName])) {
          return false;
        }
      } else if(this[propName] !== obj[propName]) {
        return false;
      }
    }
  }
  return true;
}

const x = {
  a: 22,
  b: {
    a: 1,
    b: 2
  },
  c: [1,2,3]
}

const y = {
  a: 22,
  b: {
    a: 1,
    b: 2
  },
  c: [1,2,3]
}

console.log(x.equals(y))