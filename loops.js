let person = {
  name: 'Todd',
  age: 44,
  awesome: true
}

for (let i in person) {
  console.log(i + ' = ' + person[i])
}