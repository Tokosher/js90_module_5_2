

// ***************Прототипне наслідування та метод Object.create***************\\
// const user = {
//     name: 'Alice',
//     age: 23,
//     sayHello() {
//         console.log(`Hello my name is ${this.name}`);
//     },
//     getAge() {
//         console.log(`my age ${this.age}`);
//     }
// }


// const student = Object.create(user);

// console.log(student);
// console.log(Object.getPrototypeOf(student) === user);
// student.sayHello()


// student.name = 'Kate';
// console.log(student);
// student.sayHello()

// console.log(student)
// student.getAge();


// student.age = 30;
// console.log(student)
// student.getAge();









// *********************************ES6 Class*********************************\\




// *****Публічні властивості та методи***** \\
// class User {
//     name;

//     constructor(name) {
//         this.name = name;
//     }

//     showName() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// const student = new User('Alice');
// student.showName()









// *****Приватні властивості та методи***** \\
// class User {
//     name;
//     #password;

//     constructor(name, password) {
//         this.name = name;
//         this.#password = password;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt('Введи пароль!');

//         return password === this.#password;
//     }
// }


// const student = new User('Alice', 'qwerty111');
// student.showName()



// class Animal {
//     constructor () {
//         console.log('constructor!')
//     }

//     load () {
//         console.log('Loaded!')
//     }
// }

// const animal = new Animal();
// animal.load()




// ******Геттери і сеттери****** \\

// class User {
//     name;
//     #password;
//     #email;

//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt('Введіть пароль!');

//         return password === this.#password;
//     }

//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }

// const student = new User('Alice', 'qwerty111', 'test@gmail.com');
// // console.log(student.email);

// student.email = 'new@gmail.com';

// console.log(student.email);










// *****Статичні властивості та методи***** \\
// Розглянемо на практичному завдані (Task-2)










// **********Наслідування класів********* \\


// class User {
//     name;
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?🧐");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }

//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }




// class Student extends User {
//     points;

//     constructor(name, password, email, points) {
//         super(name, password, email)
//         this.points = points;
//     }
//     getPoints() {
//         console.log(`${this.name} has ${this.points} points`);
//     }
// }



// const student = new Student('Alice', 'qwerty111', 'test@gmail.com', 38);
// // student.showName()
// student.getPoints()








// ***********************Практика*********************** \\


// *******Task-1****** \\
// Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.

// class Rectangle {
//     #width;
//     #height;

//     constructor ({ height, width }) {
//         this.#width = width;
//         this.#height = height;
//     }

//     get width () {
//         return this.#width;
//     }

//     set width (newWidth) {
//         if (typeof newWidth === 'number' && newWidth > 0) {
//             this.#width = newWidth;
//         } else {
//             console.log('Ширина повинна бути числом та більше 0');
//         }
//     }

//     get height () {
//         return this.#height;
//     }

//     set height (newHeight) {
//         if (typeof newHeight === 'number' && newHeight > 0) {
//             this.#height = newHeight;
//         } else {
//             console.log('Висота повинна бути числом та більше 0');
//         }
//     }
// }
// const item = new Rectangle({ width: 10, height: 5 });

// console.log(item.width); // get
// item.width = 12 // set
// console.log(item.width); //get

// console.log(item.height);

// item.height = 20;

// console.log(item.height);





// *******Task-2******* \\
// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.



// class Hero {
//     static counter = 0;
//     static addHero() {
//         this.counter += 1;
//         console.log('Кількість героїв', this.counter);
//     }

//     name;
//     level;
//     health;

//     constructor (name) {
//         this.name = name;
//         this.level = 1;
//         this.health = 100;
//         Hero.addHero();
//     }

//     attack () {
//         console.log('Attack with 10 points!');
//     }

//     heal () {
//         this.health += 10;
//     }
// }

// const bloodseker = new Hero('Bloodseker');
// // console.log(bloodseker);
// // console.log(bloodseker.heal());
// // console.log(bloodseker);
// console.log(Hero.counter);

// const hero2 = new Hero('Superman');
// console.log(Hero.counter);

const customer = {
    firstName: 'Jacob',
    lastName: 'Mercer',

    getFullName () {
        return `${this.firstName} ${this.lastName}`;
    }
}

function makeMessage (callback) {
    console.log(`Обробляємо ${callback()}`);
}

makeMessage(customer.getFullName.bind(customer));