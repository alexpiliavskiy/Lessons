/* Напишите функцию, которая удаляет все 
вхождения заданного элемента из массива.
*/

const fruits = [
  "Banana",
  "Apple",
  "Orange",
  "Pineapple",
  "Rasberry",
  "Pineapple",
  "Apple",
  "Strawberry",
  "Apple",
];

const newFruits = (fruit) => {
  return fruit.filter((el, id) => fruit.indexOf(el) === id);
};

console.log(newFruits(fruits));
