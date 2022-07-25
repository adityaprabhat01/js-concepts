function fn() {
  console.log("Hello world")
}

//const timerId = setTimeout(fn, 1000)

//console.log(timerId)

//clearTimeout(timerId)

// const intervalId = setInterval(fn, 1000);
// setTimeout(() => {
//   clearInterval(intervalId)
// }, 5000)


// nested setTimeout

function usingSetTimeout() {
  setTimeout(function longTask() {
    console.log("Requested", new Date().toLocaleTimeString())
    serverCall();
  }, 100);
}

function serverCall() {
  setTimeout(function() {
    console.log('Fetched from server', new Date().toLocaleTimeString());
    setTimeout(usingSetTimeout, 100)
  }, 2000);
}

//singSetTimeout()


// setInterval
function serverFetch() {
  setTimeout(function() {
    console.log('Fetched from server', new Date().toLocaleTimeString());
  }, 2000);
}

function usingSetTimeinterval() {
  setInterval(function() {
    console.log("Requested", new Date().toLocaleTimeString())
    serverFetch();
  }, 100)
}

//usingSetTimeinterval();


// sync task setTimeOut
function fn() {
  console.log("Inside fn");
  for(let i=0;i<1000000;i++);
  usingSetTimeout();
}

// function usingSetTimeout() {
//   setTimeout(function () {
//     console.log(new Date().toLocaleTimeString());
//     fn();
//   }, 100)
// }

//usingSetTimeout();

// sync task setInterval
var count = 0;

function longTask() {
  count++;
  if(count === 5) clearTimeout(timerId)
  console.log("Task Initiated")
  for(let i=0;i<3000000000;i++){};
  console.log("Task finished");
}


// const timerId = setInterval(function() {
//   console.log("Inside setInterval");
//   longTask();
// }, 100)






