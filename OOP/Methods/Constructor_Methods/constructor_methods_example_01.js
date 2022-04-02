/**
 * 
 * 1. The constructor keyword is used to declare a constructor method.
 * 2. The class can contain one constructor method only
 * 3. Javascript allows us to use parent class contructor through super keyword.
 */

class Employee{

    constructor(){
        this.id = 101;
        this.name = "Roy Cheng";
    }
}

var emp = new Employee();
// document.writeln(emp.id + " " + emp.name);
console.log(emp.id + " " + emp.name);



