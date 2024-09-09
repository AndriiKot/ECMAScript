// Function Declaration statement

function hello(name) {
  console.log(`Hello ${name}!`);
}

const newHello = hello;  // !!!  "Function Reference" или "Function Assignment" !!!!

const name1 = "John";
const name2 = "Andrii";


newHello(name1) // Hello John!
newHello(name2) // Hello Andrii!





