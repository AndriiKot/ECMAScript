/*
  * создайте объект marcus с полем 'name' равное 'Marcus Aurelius' 
  * создайте объект mao    с полем 'name'         равное 'Mao Zedong' 
  * создайте объект cartesius с полем 'name'      равное 'Rene Descartes'
  * cоздайте функцию welcom 
    которая вываодит приветствие 'Ave, fullName из созданых объектов
*/

/*
'use strict';

const marcus    = { name: 'Marcus Aurelius' };
const mao       = { name: 'Mao Zedong'      };
const cartesius = { name: 'Rene Descartes'  };

const welcome = ({ name }) => {
  console.log(`Ave, ${name}`)
};

welcome(marcus);
welcome(mao);
welcome(cartesius);


  * все объекты поместить в массив persons
  * проетерируйтесь по массиву и вузовете функцию 'welcom'
*/

'use strict';

const persons = {
  marcus: { name: 'Marcus Aurelius' },
  mao: { name: 'Mao Zedong'},
  rene: { name: 'Rene Descatres'},
};

const welcome = ({ name }) => {
  console.log(`Ave, ${name}!`);
};

for(const person in persons) {
  welcome(persons[person]);
};


