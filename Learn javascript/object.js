const person = {
  name: "Sora",
  age: 20,
  city: "Tokyo"
};

console.log(person.name);    // "Sora"
console.log(person.age);     // 20
console.log(person.city);    // "Tokyo"

// add | delete
const user = { name: "Kaito" };

// Thêm
user.age = 22;
user.city = "Osaka";
console.log(user);

// Xóa
delete user.city;
console.log(user);

// key|value
const person = {
  name: "Sora",
  age: 20,
  city: "Tokyo"
};

console.log(Object.keys(person));     // ["name","age","city"]
console.log(Object.values(person));   // ["Sora",20,"Tokyo"]
console.log(Object.keys(person).length); // 3

// nested
const user = {
  name: "Sora",
  address: {
    city: "Tokyo",
    zip: "100-0001"
  },
  hobbies: ["reading", "coding"]
};

console.log(user.name);              // "Sora"
console.log(user.address.city);      // "Tokyo"
console.log(user.hobbies[0]);        // "reading"


