const button = document.querySelector("button");
console.log(button.textContent);

let count = 0;
button.addEventListener("click", function (event) {
  console.log(event) // this is the event object it is automatically passed to event handlers to provide extra features and information
  button.textContent = `clicked ${(count += 1)} times`;
});

function print(string) {
  console.log(string);
}

//select the element you want to change
const colourButton = document.querySelector("#bg-colour-button");

//add an event listener using addEventListener() and give it a fuction to run when the event happens.
function changeBg(e) {
  print("mouseover");
  document.body.style.backgroundColor = "pink";
   e.target.style.backgroundColor = "white";
}

//here we give the handler function a seperate named function. changeBg has no ()'s here because we want to wait for the event before intializing it.
colourButton.addEventListener("mouseover", changeBg);

//here we give the handler an anonymous function
colourButton.addEventListener("mouseout", function (e) {
  print("mouseout");
  document.body.style.backgroundColor = "white";
  e.target.style.backgroundColor = "tomato";
});
