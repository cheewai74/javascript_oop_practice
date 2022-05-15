var Student = require('./Student');
var Employee = require('./Employee');

let student = new Student("name 1","male","st01",7.8);
console.log('Student Info');
console.log(student.toString());

let employee = new Employee("name 2","male","e0001", 123);
console.log('Employee Info');
console.log(employee.toString());