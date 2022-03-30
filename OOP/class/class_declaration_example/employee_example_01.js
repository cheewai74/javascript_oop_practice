// Declaring class: 
// Note 1. Class always start with an uppercase letter.
//      2. A class can be declared once only.

class Employee{

    // Initializing an object
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    // Declaring method
    detail(){
        document.writeln(this.id + " " + this.name + "<br>")
    }
}

// Passing object to a variable
var e1 = new Employee(101, "Tammy Tay");
var e2 = new Employee(102, "Jim Tan");

e1.detail();
e2.detail();