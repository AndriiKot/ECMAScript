const person = {
  name: "John Doe",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },

  hello: () => this.name
};

console.log(person.name);      //John Doe
console.log(person.greet());  // Hello, my name is John Doe
console.log(person.hello()); // undefined





