let books = new Set();
books.add("Price and Prejudice");
books.add("War and Peace").add("Oliver Twist");
console.log(books);
console.log(books.size);
console.log("has Oliver Twist", books.has("Oliver Twist"));
books.delete("Oliver Twist");
console.log("has Oliver Twist", books.has("Oliver Twist"));

books.forEach(function (item){
    console.log(item);
})