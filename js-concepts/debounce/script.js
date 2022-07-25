
let counter = 0
const addText = () => {
  console.log("Add text: ", counter++)
}

const debounce = function (fn, d) {
  let timer;
  return function() {
    let context = this, args = arguments
    clearTimeout(timer)
    console.log(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, d)
  }
}

const useDebounce = debounce(addText, 300)