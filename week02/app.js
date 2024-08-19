let h1 = document.querySelector("h1");
console.log(h1);

//IF statements

let age = 9

if (age >= 18) {
    console.log("You can watch movies rated U, PG, 12, 15, and 18.")
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

function sayHello(userName) {
    console.log(`hello ${userName} !`);
}

sayHello("Shaun");