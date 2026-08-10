const fruits = ["apple", "banana", "cherry"];

console.log(fruits);          // full array
console.log(fruits[0]);       // "apple"
console.log(fruits.length);   // 3

// array.length
const names = ["Sora", "Kaito", "Yuki"];

console.log(names.length);                  // 3
console.log(names[names.length - 1]);       // "Yuki"

// array indexOf
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.indexOf("banana"));    // 1
console.log(fruits.indexOf("grape"));     // -1

// array includes
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana"));   // true
console.log(fruits.includes("grape"));    // false

if (fruits.includes("apple")) {
  console.log("Has apple");
}

// push: thêm vào cuối
const stack = [1, 2, 3];
stack.push(4);
console.log(stack);           // [1, 2, 3, 4]

// pop: xóa cuối, trả về phần tử bị xóa
const removed = stack.pop();
console.log(removed);         // 4
console.log(stack);           // [1, 2, 3]

// unshift: thêm vào đầu
const queue = ["b", "c"];
queue.unshift("a");
console.log(queue);           // ["a", "b", "c"]

// shift: xóa đầu
const first = queue.shift();
console.log(first);           // "a"
console.log(queue);           // ["b", "c"]

// splice: cắt và/hoặc chèn vào giữa, mảng GỐC thay đổi
const arr = ["a", "b", "c", "d", "e"];

const removed = arr.splice(1, 2);
console.log(removed);   // ["b", "c"]
console.log(arr);       // ["a", "d", "e"]

// Chèn không xóa
const arr2 = ["x", "y", "z"];
arr2.splice(1, 0, "new");
console.log(arr2);      // ["x", "new", "y", "z"]

// slice: lấy đoạn copy, mảng GỐC không đổi
const arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(1, 3));    // ["b", "c"]
console.log(arr.slice(2));       // ["c", "d", "e"]
console.log(arr.slice(-2));      // ["d", "e"]
console.log(arr);                // không đổi


