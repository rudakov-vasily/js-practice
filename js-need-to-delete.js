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

<<<<<<< HEAD
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
=======
// class Employee {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let emp1 = new Employee('john');
// let emp2 = new Employee('john');

// console.log(emp1 === emp2);

class Student {
  constructor(name) {
    this.name = name;
  }
}
class Employee {
  constructor(name) {
    this.name = name;
  }
}

let users = [
  new Student('user1'),
  new Employee('user2'),
  new Student('user3'),
  new Employee('user4'),
  new Student('user5'),
  new Employee('user6'),
  new Student('user7'),
];

for (let i = 0; i < users.length; i++) {
  if (users[i] instanceof Employee) {
    console.log(users[i].name);
  }
}
>>>>>>> 9be28a268b49aa894af3eb6dc80902bd060cb762
