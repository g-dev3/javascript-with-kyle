let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}

let person = {
  name: "Gopal",
  friend: {
    name: "Sunil",
    friend: {
      name: "Roshan",
    },
  },
};

let currentPerson = person;

while (currentPerson != null) {
  if (currentPerson.name === "Sunil") continue;
  // break;
  console.log(currentPerson.name);
  currentPerson = currentPerson.friend;
}
