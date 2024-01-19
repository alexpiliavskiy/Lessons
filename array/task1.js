/*1.Напишите функцию, которая принимает массив чисел 
и возвращает максимальное и минимальное числа 
в этом массиве.
*/

const numbers = [1, 45, 22, 8, -7, 9, -4, 6, 2, 5, -45];

const minNumbers = (num) =>
  num.reduce((value, number) => Math.min(value, number));
console.log(minNumbers(numbers));

const maxNumbers = Math.max.apply(null, numbers);
console.log(maxNumbers);
