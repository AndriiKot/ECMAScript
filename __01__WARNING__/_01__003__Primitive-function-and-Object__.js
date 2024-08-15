const product = {
  name: 'pen',
  price: 5,
};

const fn = ({ name, price }) => {
  name = 'newPen'
  price = price ** 5
  console.log(name, price);
}


fn(product);               // newPen 3125
console.log(product);      // { name: 'pen', price: 5 }




