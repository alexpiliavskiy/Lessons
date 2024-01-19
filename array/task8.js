/*Напишите функцию, которая сортирует массив чисел 
по возрастанию или убыванию.
*/

const numbersArray = [4, -1, -20, 15, 16, 18, 3, 8];

const sortedOne = numbersArray.sort((a, b) => a - b);

console.log(sortedOne);

const sortedTwo = numbersArray.sort((a, b) => b - a);

console.log(sortedTwo);
