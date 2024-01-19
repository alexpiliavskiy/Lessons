/* Реализуйте функцию, которая 
вычисляет среднее значение 
элементов массива чисел.
*/

const numbersArray = [8, 3, 4, 9, 12];

// function calcValue(numbersArr) {
//   const sum = numbersArr.reduce((total, value) => total + value, 0);
//   console.log(sum);

//   const average = sum / numbersArr.length;
//   console.log(average);

//   return average;
// }

// calcValue(numbersArray);
//-------------------------------------------//
const calcValue = (numbersArr) => {
  const sum = numbersArr.reduce((total, value) => total + value, 0);
  console.log(sum);

  const average = sum / numbersArr.length;
  console.log(average);

  return average;
};

calcValue(numbersArray);
