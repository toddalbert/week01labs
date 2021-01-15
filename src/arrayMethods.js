let family = [ 
  { name: 'Sage', gender: 'female', age: 20 },
  { name: 'Noah', gender: 'male', age: 17 },
  { name: 'Henry', gender: 'male', age: 11 },
  { name: 'Todd', gender: 'male', age: 45 },
  { name: 'Meghann', gender: 'female', age: 42 },
]

let betterWay = family.map(member => {
  return { name: member.name, born: 2020-member.age }
})
console.log(betterWay)

let forArray = []

for(let i =0; i < family.length; i++) {
  let born = 2020 - family[i].age
  forArray.push({ name: family[i].name, born: born })
}

console.log(forArray)
