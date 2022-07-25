function timeoutify(fn, delay) {
  var intv = setTimeout(function () {
    intv = null;
    fn(new Error("Timeout!!!"));
  }, delay);
  return function () {
    if(intv !== null) {
      clearInterval(intv);
      foo(null, "Before timeout, no error");
    }
  }
}

function foo (err, data) {
  if(err) {
    console.error(err);
  } else {
    console.log(data);
  }
}

const x = timeoutify(foo, 2000);
const a = timeoutify(foo, 2000);
x()

function asyncify(fn) {
  var orig_fn = fn;
  var intv = setTimeout(function () {
    intv = null;
    if(fn) fn();
  }, 0);

  fn = null;

  return function () {
    if(intv !== null) {
      foo(null, "Synchronous function");
    } else {
      foo(null, "Async function")
    }
  }
}

const y = asyncify(foo);
y();
setTimeout(asyncify(foo), 200);
setTimeout(asyncify(foo), 0);