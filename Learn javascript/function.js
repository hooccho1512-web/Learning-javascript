// Function cơ bản
function greet() {
  console.log("Hello");
}

greet();

// Function có tham số
function greetName(name) {
  console.log("Hello " + name);
}

greetName("Sora");

// Function có return
function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result);          // 8

console.log(add(10, 20));     // 30

// Function không return → undefined
function noReturn() {
  console.log("No return here");
}

console.log(noReturn());
