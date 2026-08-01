// Level 1: basic callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Sora", sayBye);

// Level 2: inline anonymous function
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Sora", function() {
  console.log("Bye!");
});

// Level 3: callback không nhận tham số
function doTask(callback) {
  console.log("Doing task...");
  callback();
}

doTask(function() {
  console.log("Done!");
});

// Level 4: callback nhận nhiều tham số
function getUser(callback) {
  const name = "Sora";
  const age = 20;
  const role = "learner";
  callback(name, age, role);
}

getUser(function(name, age, role) {
  console.log("Name: " + name);
  console.log("Age: " + age);
  console.log("Role: " + role);
});

// Level 5: callback lồng trong callback
function step1(callback) {
  console.log("Step 1");
  callback();
}

function step2(callback) {
  console.log("Step 2");
  callback();
}

function step3(callback) {
  console.log("Step 3");
  callback();
}

step1(function() {
  step2(function() {
    step3(function() {
      console.log("All steps done");
    });
  });
});

// Level 6: callback + setTimeout
function delayed(message, delay, callback) {
  setTimeout(function() {
    console.log(message);
    callback();
  }, delay);
}

delayed("First (1s)", 1000, function() {
  delayed("Second (1s later)", 1000, function() {
    console.log("Done");
  });
});

// Level 7: callback + for
function eachItem(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i], i);
  }
}

const fruits = ["apple", "banana", "cherry"];

eachItem(fruits, function(fruit, index) {
  console.log(index + ": " + fruit);
});

// Level 8: callback + object, array
const users = [
  { name: "Sora", age: 20 },
  { name: "Kaito", age: 22 },
  { name: "Yuki", age: 19 }
];

function processUsers(userList, callback) {
  for (let i = 0; i < userList.length; i++) {
    callback(userList[i], i);
  }
}

processUsers(users, function(user, index) {
  console.log("User " + index + ": " + user.name + ", " + user.age);
});
