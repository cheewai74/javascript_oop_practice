function plus(a,b){
    var sum = a + b
    return sum;
}

console.log(plus(2,2));

function product(a, b){
    return a*b;
}

console.log(product(4,3));

const bigProduct = product(1000, 10000);
console.log(bigProduct);

setTimeout(function() {
    console.log("Hey! You rock!!!");
}, 1000)


// arrow functions
// can drop {} and ; if only 1 line.
// Note: Do not use => function to look fancy
setTimeout(() => console.log("Hey! You rock!!!"), 1000);

setTimeout(() => {
    console.log("Hey! You rock!!!");
}, 1000)