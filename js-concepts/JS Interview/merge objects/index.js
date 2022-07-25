console.log("merge objects");

const x = {
  a: 22,
  b: "hello",
  f: {
    c: 12,
    d: 33,
  },
  g: [1, 2, 3],
};

const y = {
  c: 33,
  d: "world",
  f: {
    a: 12,
    b: 33,
  },
};

// spread operator
const z = { ...x, ...y };
z["e"] = 55;

// object assign
const _z = Object.assign({}, x, y);

console.log(z);
console.log(_z);

//custom function
function isObject(value) {
  if (value !== null && typeof value === "object" && !Array.isArray(value))
    return true;
}

function merge(...arguments) {
  let target = {};

  function merger(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (isObject(obj[prop])) {
          target[prop] = merge(target[prop], obj[prop]);
        } else {
          target[prop] = obj[prop];
        }
      }
    }
  }

  for (let i = 0; i < arguments.length; i++) {
    merger(arguments[i]);
  }

  return target;
}

console.log(merge(x, y));

o1 = {
  a: 1,
  b: 2,
  c: {
    ca: 1,
    cb: 2,
    cc: {
      cca: 100,
      ccb: 200,
    },
  },
};

o2 = {
  a: 10,
  c: {
    ca: 10,
    cb: 20,
    cc: {
      cca: 101,
      ccb: 202,
    },
  },
};

console.log(merge(o1, o2));
