"use strict";

const welcome = ({ name } = {}) => {
  name = name ? name : 'Anonymous'
  console.log(`Ave, ${name}!`);
};

const marcus = { name: "Marcus Aurelius" };
const mao = { name: "Mao Zedong" };
const cartesius = { name: "Rene Descartes" };

welcome(marcus);
welcome();           // !!! "Ave, Anonymous!" !!!
welcome(cartesius);
