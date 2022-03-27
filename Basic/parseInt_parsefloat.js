var entryA = prompt("Enter any value", 12345.6789);
alert(entryA);
alert(parseInt(entryA));
console.log("Expected: 12345")

var entryB = prompt("Enter any value", 12345.6789);
alert(entryB);
alert(parseFloat(entryB));
console.log("Expected: 12345.6789")

var entryC = prompt("Enter any value", "Hello World!");
alert(entryC);
alert(parseInt(entryC));
console.log("Expected NAN")

// isNaN method test whether a string can be converted to a number.It returns 
// if the string is not a number and false if the string is a number
alert(isNaN(entryC))

