const data = 'Andrii age: 37';

// !!! string.(StartIndex, LastIndex) !!!
const copySubStringData = data.substring(0, 9);

console.log(copySubStringData); // Andrii ag
console.log(data);             // Andrii age: 37


console.log(data.substring(0, 100)); // 'Andrii age: 37'
console.log(data.substring(0, -5));  //  !!! 'Anfrii age: 37' !!! arg second not valid; arg second ignore
console.log(data.substring(4, 9));   //  'ii ag'
console.log(data.substring(7));      // 'age: 37'









