// This way
function doSomething(res) {
  console.log('Result: ', res)
}

function square(num, cb) {
  let result = num * num
  cb(result)
}

square(4, doSomething)
// --------------------------

// This other way
function square2(num) {
  return num * num
}

let result = square2(4)
console.log('Result: ', result)
