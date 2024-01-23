/*Дан массив объектов, каждый из которых имеет числовое свойство price. 
Напишите функцию для подсчета общей суммы значений price.
*/

const products = [
  {
    name: "Olia",
    price: 1200,
  },
  {
    name: "Pepsi",
    price: 100,
  },
  {
    name: "Coca cola",
    price: 200,
  },
  {
    name: "Chesse",
    price: 500,
  },
  {
    name: "meat",
    price: 5000,
  },
  {
    name: "fish",
    price: 900,
  },
  {
    name: "croissant",
    price: 50,
  },
  {
    name: "cake",
    price: 10000,
  },
];

function calcPrice(products) {
  const totalPrice = products.reduce((el, currentProduct) => {
    return el + currentProduct.price;
  }, 0);
  return totalPrice;
}

console.log("Total price: ", calcPrice(products));
