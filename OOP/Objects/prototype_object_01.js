/**
 *   In Javascript, each obj contains a prototype obj that acquires properties
 *   and methods from it. Again an obj's prototype obj may contain a prototype
 *   obj that also acquires properties and methods, and so on. It can be seen as 
 *   prototype chainring.
 * 
 *    Object
 *      ^
 *      |        Inherits  from prototype
 *    Employee
 *      ^
 *      |        Inherits  from prototype
 *    Employee1
 * 
 */

function Employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Add a new property to the constructor function
Employee.prototype.company = "Yahoo";

Employee.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

var employee1 = new Employee("Ah Teck", "Tan");
var employee2 = new Employee("Tammy", "Tay");

document.writeln(employee1.fullName() + "<br>");
document.writeln(employee2.fullName() + "<br>");
document.writeln(employee1.firstName+" "+employee1.lastName+" "+employee1.company+"<br/>");
document.writeln(employee2.firstName+" "+employee2.lastName+" "+employee2.company+"<br/>");
