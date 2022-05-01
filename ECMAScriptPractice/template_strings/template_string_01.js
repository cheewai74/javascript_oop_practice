/**
 *  ES5 Standard:
 * 
 * var firstname = 'gns';
 * console.log("Hello " + firstname + ",\nHow are you?");
 * 
 */

/**
 *  ES6 Standard
 */
const firstName = 'gns';
console.log(`Hello ${firstName}, How are you?`);

var a = 10, b = 20;
console.log(`Additional value for ${a} and ${b} is ${a+b}`);
var user = {name: 'gns'};
console.log(`Current User: ${user.name.toUpperCase()}.`)

// Note ... spread operators
function tagFun(strings, ...values){
    console.log(strings.raw[0]);
}
tagFun `string text line 1 \n string text line 2`;

var a = 5, b = 10;
function tagFuns(strings, ...values){
    console.log(strings[0]);
    console.log(strings[1]);
    console.log(strings[2]);
    console.log(values[0]);
    console.log(values[1]);
    return "Bazinga!";
}
tagFuns `Hello ${a + b} world ${a * b}`;