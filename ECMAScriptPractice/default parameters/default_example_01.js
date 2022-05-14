function default1(x=1, y=2, z=3){
    console.log(x, y, z);
}
default1(5);
default1(5, 6);

function default2(x=1, y=2, z=3){
    console.log(x, y, z);
}

default2(undefined, 6, 7);

function getFullPrice(price){
    return price * 1.13;
}

function getValue(price, pricePlusTax = getFullPrice(price)){
    console.log('Price: ' + price.toFixed(2));
    console.log('PricePlusTax: ' + pricePlusTax.toFixed(2));
}

getValue(25);
console.log('------------------------------')
getValue(25, 30);