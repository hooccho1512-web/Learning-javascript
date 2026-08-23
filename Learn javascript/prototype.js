//1
// Prototype = method dùng chung cho nhiều instance
// Không copy method riêng cho từng object

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hi, tôi là " + this.name);
};

const sora = new Person("Sora", 20);
const kaito = new Person("Kaito", 22);

sora.greet();
kaito.greet();

// Cùng một method → không copy
console.log(sora.greet === kaito.greet);   // true
