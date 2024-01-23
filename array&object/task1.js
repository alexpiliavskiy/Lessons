/*1. Дан массив объектов, каждый из которых имеет свойство age. 
Напишите функцию, которая возвращает новый массив,
содержащий только объекты с age больше 18.
*/

const personInfo = [
  {
    name: "Oleksandr",
    age: 22,
  },
  {
    name: "Dmytro",
    age: 33,
  },
  {
    name: "Elena",
    age: 14,
  },
  {
    name: "Ksenia",
    age: 12,
  },
  {
    name: "Anastasia",
    age: 14,
  },
  {
    name: "Jhon",
    age: 25,
  },
];

const newPersonInfo = personInfo.filter((person) => person.age >= 18);

console.log(newPersonInfo);
