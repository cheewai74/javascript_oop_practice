var a, b, rest;
[a, b] = [1, 2];
console.log(a);
console.log(b);

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(rest);

// Destructuring Obj
// const obj = {total: 42, isValid: true};
// const {total, isValid} = obj;
// console.log(total);
// console.log(isValid);

// A variable can be extracted from an obj and assigned to a
// variable with a different name than the obj property

const obj = {total: 42, isValid: true};
const {total: tot, isValid: valid} = obj;
console.log(tot);
console.log(valid);

// Nested obj and array destructuring 
var metadata = {
    title: "Scratchpad",
    translation: [
        {
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JScript"
        }
    ]
}
var {title, translation: [{last_edit}]} = metadata;
console.log(title);
console.log(last_edit);

// Array Destructuring
var valueArray = ["one", "two", "three"];
var [one, two, three] = valueArray;
console.log(one);
console.log(two);
console.log(three);

// A variable can be assigned a default, in the case that the 
// value pulled from the array is undefined.

var [one="one", two="two"] = ["1"];
console.log(one);
console.log(two);

const [all, year, month, day] = /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('1999-12-28');
console.log(all);
console.log(year);
console.log(month);
console.log(day);


