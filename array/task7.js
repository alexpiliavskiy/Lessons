/*Реализуйте функцию, которая возвращает новый массив, 
состоящий из элементов, которые удовлетворяют
 заданному условию (например, больше определенного значения)
 */

const people = [
  {
    names: "Oleksandr",
    age: 22,
    budget: 7100,
  },
  {
    names: "Dmytro",
    age: 33,
    budget: 150000,
  },
  {
    names: "Elena",
    age: 16,
    budget: 1000,
  },
  {
    names: "Ksenia",
    age: 14,
    budget: 4000,
  },
];

const filtered = people.filter((person) => person.budget > 5000);

console.log(filtered);

const filteredAge = people.filter((person) => person.age < 18);

console.log(filteredAge);
