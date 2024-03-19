// const Animal = {
//   name: "Тварина",
//   voice: "Звук",
//   say() {
//     console.log(`${this.name} каже ${this.voice}`);
//   },
// };

// const dog = { ...Animal };
// dog.name = "Бобік";
// dog.voice = "Гав";

// dog.say();
// console.log(dog);

// // (Animal.go = function () {
// //   console.log(`${this.name} біжить`);
// // };
// // не работает если есть уже обьекты
// // dog.go();
// // )

// Animal.go = function () {
//   console.log(`${this.name} біжить`);
// };

// dog.go();
/////////////////////////////////////////////////////////

// const Animal = {
//   name: "Тварина",
//   voice: "Звук",
//   say() {
//     console.log(`${this.name} каже ${this.voice}`);
//   },
// };

// const dog = Object.create(Animal);
// dog.name = "Бобік";
// dog.voice = "Гав";

// dog.say();
// console.log(dog);

// Animal.go = function () {
//   console.log(`${this.name} біжить`);
// };

// dog.go();

// console.log(Object.getPrototypeOf(dog) === Animal);
// console.log(Animal.isPrototypeOf(dog));

// Object.setPrototypeOf(dog, null);
// Object.setPrototypeOf(dog, { asd: "123" });
// console.log(Object.getPrototypeOf(dog));
/////////////////////////////////////////////////////////

// const Animal = {
//   name: "Тварина",
//   voice: "Звук",
//   say() {
//     console.log(`${this.name} каже ${this.voice}`);
//   },
// };

// const dog = Object.create(Animal);
// dog.name = "Бобік";
// dog.voice = "Гав";

// Object.defineProperty(dog, "_space", {
//   value: 0,
//   writable: true,
// });

// Object.defineProperty(dog, "space", {
//   set(value) {
//     this._space = value * 4;
//   },
//   get() {
//     return `${this._space || 0} px`;
//   },
// });
// console.log(dog.space);

// dog.space = 4;
// console.log(dog.hasOwnProperty("voice"));
// console.log(dog.say);
// console.log(Object.getOwnPropertyDescriptor(dog, "_space"));

// delete dog._age;
// console.log(Object.keys(dog));

// Object.defineProperty(dog, "location", {
//   value: "Ukraine",
//   //   writable: true,
//   //   cofiguratble: true,
//   //   enumerable: true,
// });

// console.log(dog.location);

// dog.location = "USA";
// console.log(dog.location);

// delete dog.location;

// console.log(Object.keys(dog));
/////////////////////////////////////////////////////////
const Tag = {
  render() {
    return `<'${this.className}'>${value}<>`;
  },
  className: null,
};
const Button = Object.create(Tag);
Button.render = function (value = "") {
  return `<button class='${this.className}' style='${this.style}'>${value}<button>`;
};

const mainButton = Object.create(Button, {
  style: {
    value: "background: red",
    writable: true,
  },
  className: {
    value: "my-button",
  },
});
console.log(mainButton.render("Click"));
console.log(mainButton.className);

const Input = Object.create(Tag);
Input.render = function () {
  return `<input placeholder='${this.placeholder}' style='${this.style}'/>`;
};
const loginInput = Object.create(Input, {
  style: {
    value: "border: 1px solid red;",
    writable: true,
  },
  placeholder: {
    value: "Login...",
  },
});
console.log(loginInput.render());
console.log(loginInput.className);

const serverRequest = {
  data: null,
  getData() {
    ///...
  },
  render() {
    this.data = this.getData();
    ///...вивід данних
  },
};

const page = {
  component: [],
  path: "/.../.../",
  render() {
    ///...
  },
};
