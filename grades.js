function assignGrade(grade){ 
  switch(Math.floor(grade/10)) {
    case 10:
    case 9:
      return 'A'
    case 8:
      return 'B'
    case 7:
      return 'C'
    case 6:
      return 'D'
    default:
      return 'F'
  }
}

console.log('100 -> ', assignGrade(100))
console.log('95 -> ', assignGrade(95))
console.log('90 -> ', assignGrade(90))
console.log('85 -> ', assignGrade(85))
console.log('80 -> ', assignGrade(80))
console.log('75 -> ', assignGrade(75))
console.log('70 -> ', assignGrade(70))
console.log('65 -> ', assignGrade(65))
console.log('60 -> ', assignGrade(60))
console.log('55 -> ', assignGrade(55))
