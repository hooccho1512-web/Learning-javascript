// Toán tử số học
let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.33...
console.log(a % b);   // 1

// == vs ===
console.log(5 == "5");    // true  (so sánh giá trị)
console.log(5 === "5");   // false (so sánh cả kiểu)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true

// = là gán, không phải so sánh
let x = 10;
console.log(x == 10);     // true

// !  &&  ||
const isLoggedIn = true;
const isAdmin = false;

console.log(!isLoggedIn);              // false
console.log(isLoggedIn && isAdmin);    // false
console.log(isLoggedIn || isAdmin);    // true

