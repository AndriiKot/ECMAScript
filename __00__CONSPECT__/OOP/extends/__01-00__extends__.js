class Animals {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`I am ${this.name}. I am speak`);
  }
}

class Dog extends Animals {
  speak() {
    console.log(`I am ${this.name}. I am Woof!!!`);
  }
}

const animal1 = new Animals("Animal");
const animal2 = new Dog("Dog");

animal1.speak();
animal2.speak();

// I am Animal. I am speak
// I am Dog. I am Woof!!!
