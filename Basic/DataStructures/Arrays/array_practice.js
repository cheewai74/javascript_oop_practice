var myArray =[];
myArray[0] = 'Monday';
myArray[1] = 'Tuesday';
myArray[2] = 'Wednesday';

console.log(myArray.length);

var myOtherArray =['Thursday','Friday'];
var week = myArray.concat(myOtherArray);
console.log(week);

var longDay = week.join("-");
console.log(longDay);

var longDay = myArray.toString()
console.log(longDay);

var myShortWeek = week.slice(1,3);
console.log(myShortWeek);

// array.splice(index, how many, [new elements])
console.log(week.splice(2,1,"holiday"))