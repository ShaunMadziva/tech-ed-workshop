//While loops will run until the condition in their brackets is false. They're useful when you don't know how many times you want to run the loop.

let counter = 0;
while (counter < 10) {
  console.log("Hello!", counter);
  counter++;
}

// const answer = 9;
// let guess = prompt("Guess the number");
// counter = 0;
// while (guess != answer && counter < 10) {
//   alert("Not correct");
//   counter++;
//   guess = prompt(`Guess again you have ${10 - counter} chances left`);
// }

// alert("Correct");

//for loops are best when you know how many iterations you want to run the loop for.

//for (set intial value of counter; a condition the counter needs to meet; update counter after each iteration of code) {so code to run}

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let counter = 0; counter < foods.length; counter++) {
  console.log(counter);
  console.log(foods[counter]);
}

// for...of
for (let food of foods) {
    console.log(food, "for...of");
  }

  // forEach
  foods.forEach(function (food) {
    console.log(food, "forEach");
  });