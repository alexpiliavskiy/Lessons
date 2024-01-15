/*напиши функцию которая выводит в цикле
 все свойства обекта и  их  значений. например
 ( console.log('свойство'+'=', 'значение'))*/

const userProfile = {
  firstName: "Oleksandr",
  secondName: "Piliavskyi",
  age: 22,
  email: "alex.pilyavskiy03@gmail.com",
};

for (let key in userProfile) {
  console.log(key + ": " + userProfile[key]);
}
//-----------------------------------------------//
const valuesObject = Object.keys(userProfile);

valuesObject.forEach((key) => {
  console.log(`${key} : ${userProfile[key]}`);
});
