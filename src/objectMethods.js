let dog = {
  name: 'Scully',
  age: 6,
  type: 'corgi',
  size: 'small',
  growl() {
    console.log('Grrrrrrr....')
  },
  speak(person) {
    (person)
      ? console.log(`Woof! ${person} is here!`)
      : this.growl()
  },
  bark() {
    console.log('BARK! BARK! BARK!')
  }
}

dog.growl()
dog.speak()
dog.speak('Becca')
dog.bark()