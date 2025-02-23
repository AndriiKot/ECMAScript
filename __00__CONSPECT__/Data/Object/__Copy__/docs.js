
const person = {
  name: 'Peter',
  age: 60,
}

const cp1 = Object.assign({}, person);
const cp1_2 = Object.assign({}, person, {age: 30});
const cp2 = {...person, name: 'Oxi', age: 40};
const cp3 = JSON.parse(JSON.stringify(person));
const cp4 = structuredClone(person);

console.log(person,cp1, cp1_2, cp2, cp3, cp4);