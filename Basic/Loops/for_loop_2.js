"use strict";
let arr1 = [6,7,8,9];
arr1.greeting = "hi";
for(var x in arr1){
    console.log(x);
}

for(var y of arr1){
    console.log(y);
}