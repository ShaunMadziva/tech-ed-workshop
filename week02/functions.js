// let h1 = document.querySelector("h1");
// console.log(h1);

//IF statements

let age = 9;

if (age >= 18) {
  console.log("You can watch movies rated U, PG, 12, 15, and 18.");
} else if (age >= 15) {
  console.log("You can watch movies rated U, PG, 12, and 15.");
} else if (age >= 12) {
  console.log("You can watch movies rated U, PG, and 12.");
} else if (age > 8) {
  console.log("You can watch movies rated U and PG.");
} else {
  console.log("You can watch movies rated U.");
}

//Functions

// write a function that adds three together and console.logs them (can be anything three numbers of your choice)

// write a function to greet obiWan. (correct one)

// write a function that says goodbye in a different language.

function sumUp(a, b, c) {
  console.log(a + b + c);
}

sumUp(1, 2, 3);

function sayHello(userName) {
  console.log(`hello ${userName} !`);
}

sayHello("obiWan");

function globalGoodbye(language) {
  if (language == "Japanese") {
    console.log("Sayōnara");
  } else if (language == "French") {
    console.log("au revoir");
  } else if (language == "Portuguese") {
    console.log("adeus");
  } else {
    console.log(`I don't know how to say goodbye in ${language}`);
  }
}

globalGoodbye("Japanese");
globalGoodbye("French");
globalGoodbye("Portuguese");
globalGoodbye("Shona");

function globalHello(language, name) {

}

/* 
@params:
a: number
b: number
operator: string
*/
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/" :
            return divide(a, b);
    }
}

console.log(calculate(29, 7, "/"))
calculate(29, 7, "/")

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}