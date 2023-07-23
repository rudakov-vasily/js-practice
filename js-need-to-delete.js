// class Employee {
//   #name;
//   #salary;
//   //   constructor(name, salary) {
//   //     this.#salary = salary;
//   //     this.#name = name;
//   //   }
//   show() {
//     console.log(Math.round(this.#salary) + ' ' + this.#name);
//   }

//   upperSalary() {
//     this.#salary *= 1.1;
//   }

//   getName() {
//     return this.#name;
//   }

//   getSalary() {
//     return this.#salary + '$';
//   }

//   setName(name) {
//     if (name.length > 3) {
//       this.#name = name;
//     } else {
//       console.log('name is ery short!');
//     }
//   }
//   setSalary(salary) {
//     this.#salary = salary;
//   }
// }

// let plumber = new Employee();
// let driver = new Employee();

// plumber.setName('vernon');
// plumber.setSalary(1350);
// driver.setName('sarah');
// driver.setSalary(1100);

// plumber.show();
// plumber.upperSalary();
// plumber.show();
// console.log(driver.getName());
// console.log(driver.getSalary());

// class Student {
//   constructor() {
//     console.log('welcom!');
//   }
//   name = '';
//   surname = '';
//   showInitials() {
//     console.log(this.letterToUp(this.name) + this.letterToUp(this.surname));
//   }
//   letterToUp(str) {
//     return str[0].toUpperCase();
//   }
// }

// let newStudent = new Student();
// newStudent.name = 'jacob';
// newStudent.surname = 'carlson';
// newStudent.showInitials();

function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counterOfFunction = counter();
console.log(counterOfFunction());
console.log(counterOfFunction());
console.log(counterOfFunction());
counterOfFunction();
counterOfFunction();
console.log(counterOfFunction());

// console.log(showCoynter());
// console.log(showCoynter());
