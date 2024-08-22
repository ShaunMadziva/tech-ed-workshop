console.log(document);
//Objects are key value pairs
const personDatabase = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

function getName() {
  let name = personDatabase.name; // dot notation to access
  console.log(name);
  return name;
}

getName(); //output Bob
personDatabase.name = "Shaun" // can assign the value of a key to something else
console.log(personDatabase.name); // Output Shaun

