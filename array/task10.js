/*Напишите функцию, которая разделяет массив
 на подмассивы заданной длины.
 */

const namesArray = [
  "Oleksandr",
  "Dmytro",
  "Ekaterina",
  "Elena",
  "Ksenia",
  "Anastasia",
  "Myhaiil",
  "Maks",
];
let size = 2;
let subArray = [];

for (let i = 0; i < Math.ceil(namesArray.length / size); i++) {
  subArray[i] = namesArray.slice(i * size, i * size + size);
}

console.log(subArray);
