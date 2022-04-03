class Moment extends Date{
    constructor(year){
        super(year);
    }
}

var m = new Moment("August 15, 1947 20:22:10");
console.log("Year Value: \n");
// document.writeln("Year Value: <br\>");
console.log(m.getFullYear());