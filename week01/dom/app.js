// the document object is a representation of the HTML file in the browser. It allows us to interact with the page using JavaScript, modifying, adding and removing elements and text, images or other content.
console.log(document);

// We can get elements by their id
const mainContainer = document.getElementById("main-container");
console.log(mainContainer);

const h1 = document.querySelector("h1");
console.log(h1);

const body = document.querySelector("body");
console.log(body);

const subtile = document.getElementById("subtitle");
subtile.textContent = "I've changed this with javascript and added the image below";
console.log(subtile);

//created an image and appended it to the body
const newImg = document.createElement("img");
console.log(newImg);

newImg.src = "image.png";
newImg.height = 200;

body.appendChild(newImg);

// use .remove to remove an element
// newImg.remove();