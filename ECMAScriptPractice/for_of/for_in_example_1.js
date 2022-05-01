/**
 *  for...in loop will iterate over all enumerable properties of an obj.
 * 
 */

var values = ["one", "two"];
for (var value in values){
    console.log("Index is: " + value);
}

for (var value in values){
    console.log("Value is: "+values[value]);
}