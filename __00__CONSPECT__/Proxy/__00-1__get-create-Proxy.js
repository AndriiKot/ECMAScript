const target = {
    message: "Hello, World!",
    test_undefined: undefined,
    test_0: 0,
    test_false: false,
    test_null: null,   
};

const handler = {
    get: function(target, prop, receiver) {
        return prop in target ? target[prop] : "Property does not exist!";
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.message);      // "Hello, World!"
console.log(proxy.nonExistent); // "Property does not exist!"
console.log(proxy.test_undefined); // undefined
console.log(proxy.test_0);         // 0
console.log(proxy.test_false)      // false
console.log(proxy.test_null)       // null
