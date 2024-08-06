// Object with Object
const product = {
  name: "ball",
  price: 200,
  size: {
    width: 200,
    height: 300,
    length: 400,
  },
};


console.log(product);

for(const key in product) {
  console.log(`key: ${key}, value: ${product[key]}`);
};
/*
key: name, value: ball
key: price, value: 200
key: size, value: [object Object]
*/