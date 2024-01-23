/*Напишите функцию, которая принимает массив объектов и новое значение,
 затем обновляет определенное свойство каждого объекта в массиве 
 на это новое значение.
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

const newAge = 8;

const addedPersonInfo = personInfo.map((person) => {
  return { ...person, age: 8 };
});

console.log(addedPersonInfo);
