let person = {
  name: "kyle",
  age: 25,
  favroitNumber: 3,
  sayHi: function () {
    console.log("Hii");
  },
  sayHi2() {
    console.log("HI");
  },
};

console.log(person.name);

console.log(person.sayHi());

console.log(person.sayHi2());

let car = {
  Make: "Dukati",
  Model: "V3",
  IsUsed: false,
  makeNoise() {
    console.log("Vroom");
  },
};

console.log(car["Model"]);

let person2 = {
  name: "Kyle",
  hobbies: ["Weight lifting", "Programming"],
  address: {
    street: "123 main road",
    City: "kakinada",
  },
};

console.log(person2.address.City);

console.log(person2.hobbies[0]);

let book = {
  title: "success",
  Auther: {
    name: "Gopal",
    age: 21,
  },
};

console.log(book.Auther.name)

console.log(book.title)


book.title = "Success Story"

console.log(book.title)

