/*Напишите функцию, которая выполняет 
глубокое копирование объекта, 
включая все вложенные объекты и массивы.
*/

const userProfile = {
  firstName: "Oleksandr",
  secondName: "Piliavskyi",
  age: 22,
  email: "alex.pilyavskiy03@gmail.com",
  work: {
    position: "System administrator",
    experince: 2,
  },
  info: {
    city: "Mykolaiv",
    country: "Ukraine",
    war: true,
  },
};

const newUserProfile = JSON.parse(JSON.stringify(userProfile));

console.log(newUserProfile);
