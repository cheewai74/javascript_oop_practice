const quantity = "12";
console.log(typeof quantity);

console.log(Number(quantity));
console.log(typeof Number(quantity));

console.log(Number("awesome"));

console.log(parseInt(quantity, 10));

const quantities = "12.99";
console.log(parseInt(quantities, 10));
console.log(parseFloat(quantities));
console.log(quantity);
console.log(+quantity);
console.log(+quantities);
console.log(quantities * 1);