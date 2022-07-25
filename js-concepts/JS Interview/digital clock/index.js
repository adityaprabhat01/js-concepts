const clock = () => {
  const time = new Date(),
  hours = time.getHours(),
  minutes = time.getMinutes(),
  seconds = time.getSeconds()
  return pad(hours % 12) + ':' + pad(minutes) + ':' + pad(seconds);
}

const pad = (input) => {
  return String(input).length === 1 ? '0' + input : input;
}

setInterval(() => {
  console.log(clock())
}, 1000);