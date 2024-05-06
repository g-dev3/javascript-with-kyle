const favoriteAnimal = "Cat";

switch (favoriteAnimal) {
  case "cat":
  case "Cat":
    console.log("This is so cute I like also Cat");
    break;
  case "Dog":
    console.log("Nice choice of dog");
    break;
  case "Shark":
    console.log("Oooo Very Dangerous Be careful with Shark");
    break;
  default:
    console.log("Sorry I have no knowlage about that");
}

const number = 5;

switch (number) {
  case 0:
    console.log("it is zero");
    break;
  case 1:
  case 2:
    console.log("This is small");
    break;
  case 3:
  case 4:
    console.log("This is medium");
    break;
  case 5:
  case 6:
    console.log("This is large");
    break;
  default:
    console.log("Try again");
}
