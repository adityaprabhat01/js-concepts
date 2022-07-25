function promiseAll(promiseList) {
  let result = [];
  let done = 0;

  return new Promise(function(resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.then((val) => {
        result[index] = val;
        done++;
        if(done === promiseList.length) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
}


function task(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(delay);
    }, delay);
  })
}

promiseAll([task(1000), task(2000), task(1000)]).then(res => console.log(res))