/**
 *  for...of is specific to collections, rather than all objs.
 * 
 *  for (variable of iterable){
 *      statement
 *  }
 * 
 */

let values = [10, 20, 30];
for (let value of values){
    console.log(value);
}

let color = "red";
for (let c of color){
    console.log(c);
}

var vals = ["one", "two"];
for (let value of vals){
    console.log("Value is: " + value);
}