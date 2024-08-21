//While loops will run until the condition in their brackets is false. They're useful when you don't know how many times you want to run the loop.

let counter = 0;
while (counter < 10) {
  console.log("Hello!", counter);
  counter++;
}

const answer = 9;
let guess = prompt("Guess the number");
counter = 0;
while (guess != answer && counter < 10) {
  alert("Not correct");
  counter++;
  guess = prompt(`Guess again you have ${10 - counter} chances left`);
}

alert("Correct");

//for loops are best when you know how many iterations you want to run the loop for
