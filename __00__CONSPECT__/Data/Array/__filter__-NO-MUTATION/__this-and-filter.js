// Аргумент `thisValue` в методе `filter()` используется для определения
// значения `this` внутри callback-функции. Это может быть полезно,
// когда вы хотите использовать методы или свойства объекта внутри callback-функции.

// Вот несколько примеров использования `thisValue`:

// 1. **Использование методов объекта внутри callback-функции**:
{
  const person = {
    name: "John Doe",
    greet: function () {
      return `Hello, my name is ${this.name}`;
    },
  };

  const names = ["John", "Jane", "Bob"];
  const greetedNames = names.filter(function (name) {
    return this.greet().includes(name);
  }, person);

  console.log(greetedNames); // Output: ['John']
}

// В этом примере, `thisValue` установлен на объект `person`,
// что позволяет использовать метод `greet()` внутри callback-функции `filter()`.

// 2. **Использование свойств объекта внутри callback-функции**:
{
  const wishlist = {
    items: ["Book", "Laptop", "Headphones"],
    maxPrice: 100,
    getAffordableItems: function () {
      return this.items.filter(function (item) {
        return this.price <= this.maxPrice;
      }, this);
    },
  };

  const affordableItems = wishlist.getAffordableItems();
  console.log(affordableItems); // Output: []
}

// В этом примере, `thisValue` установлен на объект `wishlist`,
// что позволяет использовать свойство `maxPrice`
// внутри callback-функции `filter()`. Однако, поскольку
// в данном случае объект `wishlist` не содержит свойство
// `price` для каждого элемента, результат будет пустым массивом.

// 3. **Использование переменных из внешней области видимости**:

{
  const maxPrice = 100;

  const wishlist = {
    items: [
      { name: "Book", price: 50 },
      { name: "Laptop", price: 800 },
      { name: "Headphones", price: 75 },
    ],
    getAffordableItems: function () {
      return this.items.filter(function (item) {
        return item.price <= maxPrice;
      }, this);
    },
  };

  const affordableItems = wishlist.getAffordableItems();
  console.log(affordableItems); // Output: [{ name: 'Book', price: 50 }, { name: 'Headphones', price: 75 }]
}

// В этом примере, `thisValue` установлен на объект `wishlist`,
// что позволяет использовать переменную `maxPrice`
// из внешней области видимости внутри callback-функции `filter()`.

// Важно отметить, что использование `thisValue`
// в методе `filter()` не обязательно и зависит
// от ваших конкретных потребностей. Если вам не нужно
// использовать методы или свойства объекта
// внутри callback-функции, вы можете опустить этот аргумент.
