/*Напишите функцию, которая объединяет 
два или более объекта в один*/

const userProfile = {
  firstName: "Oleksandr",
  secondName: "Piliavskyi",
  age: 22,
  email: "alex.pilyavskiy03@gmail.com",
};

const infoUserProfile = {
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

const mergedObj = Object.assign({}, userProfile, infoUserProfile);

console.log(mergedObj);
