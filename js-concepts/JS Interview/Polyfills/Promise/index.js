console.log("hello");

function sleep(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay);
  });
}

sleep(500)
  .then(() => {
    console.log("After some amount of time");
  })
  .catch(() => {
    console.log("Promise rejected");
  });

async function f() {
  try {
    await sleep(300);
    console.log("sleep the function");
  } catch (err) {
    console.log("Promise rejected");
  }
}

f();
