//complete this code
class Animal {
  constructor(species) {
    this.species = species;
  }
  
  get getSpecies() {
    return this.species;
  }
  
  makeSound() {
    console.log(`${this.species} sound`);
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }
  
  purr() {
    console.log('The Siamese makes a sound');
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log('The Golden Retriever makes a sound');
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;