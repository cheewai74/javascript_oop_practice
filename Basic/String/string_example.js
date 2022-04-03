

// Split(): Spits a string into an array of substrings, and returns the 
//          new array.
// substr(): Extracts a substring from a string, beginning at a specified 
//           start position and through the specified number of characters
var string1 = "The quick brown fox ";
console.log("Split(): " + string1.split(" ") + "\n");
// extracts "quick brown"
console.log("substr(): "+ string1.substring(4, 15)); 
// extracts "quick brown fox"
console.log("substr(): "+ string1.substring(4)); 
console.log("toLowerCase(): " + string1.toLowerCase() + "\n");
console.log("toUpperCase(): " + string1.toUpperCase() + "\n");