/*Создайте функцию, которая объединяет два массива, 
переданных в качестве аргументов,
 и возвращает новый массив.
 */

const myArrayOne = [8, 3, 4, 9, 12];
const myArrayTwo = [1, 2, 5, 6, 7, 10, 11];
const newArray = myArrayOne.concat(myArrayTwo).sort((a, b) => a - b);

console.log("Print newArray: ", newArray);
console.log("Length newArray: ", newArray.length);
