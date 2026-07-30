// For cơ bản
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0, 1, 2, 3, 4

// Đếm ngược
for (let i = 5; i > 0; i--) {
  console.log(i);
}
// 5, 4, 3, 2, 1
// For với array
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i + ": " + fruits[i]);
}
// 0: apple
// 1: banana
// 2: cherry

// For lồng nhau
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }
}


// Break: thoát vòng lặp
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// 0, 1, 2, 3, 4

// Continue: bỏ qua lần lặp hiện tại
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// 0, 1, 3, 4
