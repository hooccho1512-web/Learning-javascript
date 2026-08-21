//1
const person = {
  name: "Sora",
  age: 20,
  city: "Tokyo"
};

// Dot notation
console.log(person.name);    // "Sora"
console.log(person.age);     // 20

// Bracket notation
console.log(person["name"]); // "Sora"
console.log(person["city"]); // "Tokyo"

//2
const person = {
  name: "Sora",
  age: 20
};

const key = "name";
console.log(person[key]);   // "Sora"

// Dot không dùng được với biến
// console.log(person.key);  // undefined

//3
const user = { name: "Kaito" };

user.age = 22;
user.city = "Osaka";
console.log(user);

delete user.city;
console.log(user);

//4
const person = {
  name: "Sora",
  age: 20
};

// Cách 1: in
console.log("name" in person);    // true
console.log("email" in person);   // false

// Cách 2: hasOwnProperty
console.log(person.hasOwnProperty("name"));   // true
console.log(person.hasOwnProperty("email"));  // false

// Cách 3: so với undefined
console.log(person.email === undefined);      // true

