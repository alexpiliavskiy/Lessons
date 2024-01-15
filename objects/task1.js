/*Создай объект, представляющий пользователя, 
с полями для имени, возраста и почтового адреса. 
Затем добавьте, измените и удалите несколько свойств.
*/

const userProfile = {
  firstName: "Oleksandr",
  secondName: "Piliavskyi",
  age: 22,
  email: "alex.pilyavskiy03@gmail.com",
};

console.log(userProfile);

userProfile.work = "System administrator";
userProfile.experince = 2;
userProfile.hasGirlFriend = false;

console.log(userProfile);

delete userProfile.work;

console.log(userProfile);

userProfile.firstName = "Dmytro";
userProfile.age = 32;

console.log(userProfile);
