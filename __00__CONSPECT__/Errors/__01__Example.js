const calculateTotal = (prices) => {
  let amount = 0;

  if (!Array.isArray(prices)) {
    throw new Error(`Array expected, but received a ${typeof prices}`);
  }

  for (const price of prices) {
    if (typeof price !== 'number') {
      throw new Error(`Invalid price value: ${price}. Expected a number.`);
    }
    amount += price;
  }
  
  return amount;
}

try {
  console.log(calculateTotal([1, 2, 3])); // 6
  console.log(calculateTotal(1, 2, 3));    // Ошибка
} catch (error) {
  console.error(error.message);
}

