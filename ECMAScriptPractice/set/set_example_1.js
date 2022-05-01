var valueSet = new Set([1,2,3,4]);
console.log(valueSet);

var valueSet1 = new Set();
valueSet1.add(1);
valueSet1.add("green");
console.log(valueSet1);
valueSet1.delete("green");
console.log(valueSet1);

var valueSet2 = new Set([3, 7]);
console.log(valueSet2.has(3));
console.log(valueSet2.has(31));

var valueSet3 = new Set([1,2,2,3]);
for(let item of valueSet3){
    console.log(item);
}

var valueSet4 = new Set([1,2,3,3,true]);
console.log(valueSet4);
var array = Array.from(valueSet4);
var array1 = [...valueSet4];
console.log(array);
console.log(array1);