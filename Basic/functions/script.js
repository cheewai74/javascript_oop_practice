// Invoking functiobs as methods
// 1. The this argument points to the object
// 2. Invoke the function using dot notation
// 3. The binding of this happens at invocation time.

var calc = {
    status: 'Awesome',
    plus: function (a,b){
        return (
            console.log(this),
            console.log(a+b),
            console.log(arguments),
            console.log(this.status)

        )
    }
}

calc.plus(2,2);

var Dog= function(){
    var name, breed;
    return console.dir(this);
}

var speak = function(saywhat){
    console.log(saywhat);
}

var speaks = function(what){
    // console.log(this.love);
    // console.log(this.normal);
    console.log(what);
}

var Cat= function(){
    var name, breed;
}

var plus = function(){
    var sum = 0;
    for (var i = arguments.length -1; i >= 0; i--){
        sum += arguments[i];
    }
    return sum;
}


Dog.prototype.speak = speak;
Cat.prototype.speak= speak;

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";
firstDog.speak('woof');

secondDog = new Dog;
secondDog.name = "Fluffy";

console.log(firstDog.name)
console.log(secondDog.name)

firstCat = new Cat;
firstCat.name = "Lizzy";
firstCat.breed = "Domestic Cat";
firstCat.speak('meow');

var saySomething = {normal: "meow", love: "purr"};
speaks.call(saySomething, saySomething.normal);

// Can pass in an array or element
speaks.apply(saySomething, ['meouff']);

console.log(plus(2,2,2,3,2,3,4))