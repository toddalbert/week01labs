function crazy() {
  throw 'What now?'
}

function awesome(){
  return true
}

try {
  let plop = crazy()
  let fizz = awesome()
}
catch(msg) {
  console.log('We got an error: ', msg)
}
