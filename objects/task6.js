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
// const newArray = Object.entries(userProfile);

function objToArr(myObject) {
  const arr = [];
  for (const values in myObject) {
    arr.push([values, myObject[values]]);
  }

  return arr;
}

console.log(objToArr(userProfile));

function objToArr(obj) {
  return Object.entries(obj);
}

console.log(objToArr(userProfile));
