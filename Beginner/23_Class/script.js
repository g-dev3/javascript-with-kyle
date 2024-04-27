function UserName(name, age) {
  return { name: name, age: age, human: true };
}

const user = UserName("Gopal", 21);

console.log(user);

const date = new Date();

console.log(date.getDay());

console.log(date.getMonth());

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.human = true;
// }

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  printName() {
    console.log(this.name);
  }
}

const user1 = new User("Gopal", 21);
const user2 = new User("Sunil", 18);
user1.printName();
console.log(user1);
console.log(user2);
