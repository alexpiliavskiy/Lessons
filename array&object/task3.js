/*3.Создайте функцию, которая принимает массив объектов 
с ключами firstName и lastName, и возвращает массив строк 
в формате "Фамилия, Имя".
*/

const people = [
  {
    firstName: "Oleksandr",
    lastName: "Pilyavskyi",
    budget: 7100,
  },
  {
    firstName: "Dmytro",
    lastName: "Pilyavskyi",
    age: 33,
    budget: 150000,
  },
  {
    firstName: "Elena",
    lastName: "Prepodobnaya",
    age: 16,
    budget: 1000,
  },
  {
    firstName: "Ksenia",
    lastName: "Kytsenko",
    age: 14,
    budget: 4000,
  },
  {
    firstName: "Alina",
    lastName: "Bysha",
    age: 26,
    budget: 2000,
  },
  {
    firstName: "Olya",
    lastName: "Senkevich",
    age: 20,
    budget: 1500,
  },
];

// function fullNames(personFullName) {
//   return personFullName.map(
//     (person) => `${person.lastName} ${person.firstName}`
//   );
// }

// console.log(fullNames(people));

const fullNames = (personFullName) => {
  return personFullName.map(
    (person) => `${person.lastName} ${person.firstName}`
  );
};

console.log(fullNames(people));
