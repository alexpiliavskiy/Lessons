/*У вас есть массив объектов с разными ключами, включая name и age.
 Напишите функцию для сортировки массива по имени в алфавитном порядке.
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
  {
    names: "Alina",
    age: 26,
    budget: 2000,
  },
  {
    names: "Olya",
    age: 20,
    budget: 1500,
  },
];

const sortedPeopleName = people.sort((a, b) => (a.names > b.names ? 1 : -1));

console.log(sortedPeopleName);
