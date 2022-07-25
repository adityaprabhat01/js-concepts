console.log("HI")

function deepSeal(obj) {
  const propNames = Object.keys(obj);  
  for(let i=0;i<propNames.length;i++) {
    const prop = obj[propNames[i]];
    typeof prop === "object" ? deepSeal(prop) : prop;
  }
  return Object.seal(obj);
}

const obj = {
  prop: 42,
  nested: {
    a: 1,
    b: 2
  }
};

//Seal the object
deepSeal(obj);

console.log(obj)

obj.nested.a = 2;
delete obj.nested.a;
console.log(obj.nested.a);
// 2


/**
 * 
 * Unlike Object.seal(), Object.freeze() freezes the object completely. 
 * It does not even allow changing of object properties.
 */