/*Создайте функцию, которая преобразует объект в массив, 
где каждый элемент является парой [ключ, значение].
*/

const userProfile = {
  firstName: "Oleksandr",
  secondName: "Piliavskyi",
  age: 22,
  email: "alex.pilyavskiy03@gmail.com",
};
////Метод кторый преобразует объект в массив, всё что нашёл
const newArray = Object.entries(userProfile);

console.log(newArray);
console.log(newArray.length);
