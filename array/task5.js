/* Создайте функцию, которая проверяет, 
все ли элементы массива четные, 
и возвращает true или false.
*/

const numbers = [2, 5, 7, 9, 8, 6, 4, 10];

const sort = (num) => {
  for (let i = 0; i < numbers.length; i++) {
    if (num[i] % 2 === 0) {
      console.log(num[i]);
    }
  }
};

sort(numbers);
