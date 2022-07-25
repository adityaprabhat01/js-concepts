let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  }
}

const betterFunction = debounce(getData, 1000);

const throttle = function (fn, d) {
  let lastRan, lastFunc;
  return function() {
    const context = this;
    const args = arguments;

    if(!lastRan) {
      fn.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if(Date.now() - lastRan >= d) {
          fn.apply(context, args);
          lastRan = Date.now();
        }
      }, d - (Date.now() - lastRan))
    }
  }
}

//const betterFunction = throttle(getData, 1000);

// difference between two key strokes is 300ms => Debouncing
// difference between two function call is 300ms => Throttling 

