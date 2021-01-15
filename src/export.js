
exports.doSomething = function(a,b){
  console.log({a,b})
}
exports.doSomethingElse = (a,b) => {
  console.log('a is: ', a)
  console.log('b is: ', b)
}