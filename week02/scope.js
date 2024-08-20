//this is global scope
//variable here can be used/accessed anywhere


let globaVariable = "hello "

function Hello() {
    console.log(globaVariable + "mate")
}

Hello() // Output: hello

function sayHello() {
    //this is fuction scope, this can only be used by this function. Global access has no access.
    const name = "Bob";
    console.log("Hello " + name + "!");
  }
  
  sayHello(); // Output: Hello Bob!
  
  console.log(name); // Output: Uncaught ReferenceError: name is not defined
  