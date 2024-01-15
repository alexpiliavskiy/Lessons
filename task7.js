/*Создайте объект с геттерами и сеттерами для некоторых свойств,
 которые обеспечивают дополнительную логику 
 при чтении и изменении этих свойств.
 */

const user = {
  name: "Oleksandr",
  surname: "Piliavskyi",
};
//---------------------1-ый вариант-------------------//
Object.defineProperty(user, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

console.log(user.fullName);
//---------------------2-ой вариант-------------------//
Object.seal(user);

user.name = "Dmytro";

console.log(user);
//---------------------3-ий вариант-------------------//
Object.freeze(user);

user.name = "Elena";
user.age = 22;

console.log(user);
