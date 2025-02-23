
const createAddress = (type) => {
  const address = type.toUpperCase();
  return (name) => `${address}: ${name}`
}


const addressW = createAddress('Woman');
const addressM = createAddress('Man');

console.log(addressW('Oxi'));
console.log(addressM('Andrii'));

