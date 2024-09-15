const user = {
  name: 'Andrii',
  age: 37,
}

const handler = {
  set: (targer, property, newValue) => {
    if (proerty === 'age' && (newValue < 0 || newValue > 120)) {
      throw newRangeError("Age must be between 0 and 120.");
    }
    targer[property] = newValue;
    return true;
  }
};

const userProxy = new Proxy(user, handler)

try {
  userProxy.age = 220;
} catch(e) {
  console.error(e.message);
}




