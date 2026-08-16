//1
const users = [
  { name: "Sora", age: 20 },
  { name: "Kaito", age: 22 },
  { name: "Yuki", age: 19 }
];

console.log(users[0].name);   // "Sora"
console.log(users[1].age);    // 22
console.log(users.length);    // 3

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name + " - " + users[i].age);
}

//2
const playlist = {
  name: "My Songs",
  songs: ["Song A", "Song B", "Song C"],
  count: 3
};

console.log(playlist.name);         // "My Songs"
console.log(playlist.songs[0]);     // "Song A"
console.log(playlist.songs.length); // 3

//3
const library = {
  name: "My Books",
  books: [
    { title: "Book A", author: "Author X" },
    { title: "Book B", author: "Author Y" }
  ]
};

console.log(library.name);              // "My Books"
console.log(library.books[0].title);    // "Book A"
console.log(library.books[1].author);   // "Author Y"
