/**
 * 
 *  Inheritance:
 * 
 *  1.  It maintances a IS-A relationship
 *  2.  The extends keyword is used in class expressions / class declarions
 *  3.  Using extends keyword, we can acquire all the properties and behaviour of the built object
 *      as well as custom classes
 *  4. We can also use a prototype-based approach to achieve inheritance
 * 
 */

class Moment extends Date{
    constructor(){
        super();
    }
}

var m = new Moment();
console.log("Current Date: \n")
// document.writeln("Current Date: " + <br/>);
console.log(m.getDate() + "-" +(m.getMonth() + 1) + "-" + m.getFullYear() +"\n");
//document.writeln(m.getDate() + "-" +(m.getMonth() + 1) + "-" + m.getFullYear() +"<br\>");