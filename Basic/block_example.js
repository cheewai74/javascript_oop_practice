function sayTest(bar){
    const teststring ="Test String";
    console.log(teststring);

    // Javascript allow us to nest funtion
    function baz(){
        console.log(bar)
    }
    baz();
}

sayTest("bar");

function foo(){
    if(true){
        var foo = "foo";
    }
    console.log(foo);
}
foo();

// Closures in JavaScript
function sayWord(word){
    return () => console.log(word);
}

const sayHello = sayWord("Hello");
sayHello();

sayTest("bar");

// Callbacks
// make is available in the callback because of lexical scoping, 
// and the value of make is persisted when the anonymous function 
// is called by filter because of a closure.

function getCarsByMake(make){
    return cars.filters(x => x.make === make);
}

// Storing state

function makePerson(name){
    let _name = name;

    return {
        setName: (newName) => (_name = newName),
        getName: () => _name,
    };
}

const me = makePerson("Kent");
console.log(me.getName());

me.setName("Tim");
console.log(me.getName());
