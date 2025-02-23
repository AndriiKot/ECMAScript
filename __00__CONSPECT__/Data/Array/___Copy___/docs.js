
const arr1 = ['Andrii', 'Roma', 'Dima', 'Nikita'];

const cp1 = arr1.slice();
const cp2 = [].concat(arr1);
const cp3 = [...arr1, 'Oxi'];
const cp4 = Array.from(arr1);

cp1[4] = 'Alexandr';
cp2[4] = 'Oleg';
cp4[4] = 'Julia';


console.log(arr1); //[ 'Andrii', 'Roma', 'Dima', 'Nikita']
console.log(cp1); // [ 'Andrii', 'Roma', 'Dima', 'Nikita', 'Alexandr' ]
console.log(cp2); // [ 'Andrii', 'Roma', 'Dima', 'Nikita', 'Oleg' ]
console.log(cp3); // [ 'Andrii', 'Roma', 'Dima', 'Nikita', 'Oxi' ]
console.log(cp4); // [ 'Andrii', 'Roma', 'Dima', 'Nikita', 'Julia]


 
