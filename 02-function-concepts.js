// Function declarations vs expressions

// declare a function called sayHello that takes a single parameter "name" and returns "Hello {name}"

// A function declaration
function sayHello(name) {
  return `Hello ${name}`;
}

// A function expression
const sayHelloAgain = function (name) {
  return `Hello ${name}`;
};

console.log(sayHelloAgain("John"));

// Arrow Functions
// const sayHelloArrow = (name) => {
//   return `Hello ${name}`;
// };

// Shortened Form
// only works when there's one line of code inside the function body
const sayHelloArrow = (name) => `Hello ${name}`;

console.log(sayHelloArrow("Arrow"))