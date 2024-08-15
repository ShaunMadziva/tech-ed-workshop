let myName = "Shaun"; //let value can be changed
const myLocation = "Norwich"; // const value cannot be changed

console.log(`My name is ${myName} I live in ${myLocation}`);

myName = "Kudzi";

//myLocation = "London"

console.log(`My name is ${myName} I live in ${myLocation}`);

let myNum1 = 5;
let myNum2 = 6;
let mySum = myNum1 + 10;

console.log(myNum1);
console.log(mySum);

myNum1 = 12;
myNum2 = 2;

console.log(myNum1 > myNum2)

console.log(myNum1 + myNum2);

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};
