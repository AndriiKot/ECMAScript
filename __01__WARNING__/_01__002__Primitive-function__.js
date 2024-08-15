// Function Declaration statement

function hello(name = 'andrii') {
  console.log(name)  	                        // !!! andrii !!!
  name = name[0].toUpperCase() + name.slice(1); // !!! NO MUTATION !!!
  console.log(name,"\n")                        // !!! Andrii !!!
  return `Hello ${name}!`;
}


// !!! NO MUTATION !!!
const name1 = 'roma'
const name2 = 'dmitry'

hello(name1)  // roma Roma
hello(name2)  // dmitry Dmitry

console.log(name1, name2) // roma dmitry
// !!! NO MUTATION !!!
 