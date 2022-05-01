
// Class can be unnamed.
// var Person = class {
//     constructor(_firstName, _lastName){
//         this._firstName = _firstName;
//         this._lastName = _lastName;
//     }
// }



// Class can be named.
var Person = class Person{
    constructor(_firstName, _lastName){
        this._firstName = _firstName;
        this._lastName = _lastName;
    }

    fullName(){
        return this.firstName + ' '+ this.lastName;
    }

    /**
     * Note: The three dots in JavaScript are the spread / rest operator. 
     * The spread syntax allows an expression to be expanded in places 
     * where multiple arguments are expected. 
     * The rest parameter syntax is used for functions with a 
     * variable number of arguments. The spread / rest operator 
     * for arrays was introduced in ES6.
     */
    static MarksFirstLast(...marks){
        let sorted = marks.sort(function(a,b){return b-a});
        return 'First ' + sorted[0] + ' ' + 'Last ' + sorted[marks.length -1];
    }
}

// console.log(Person.MarksFirstLast(7,4,8,2,9)); // first 9 last 2

// ========================= Inheritance Demo ================================================

class Persons{
    constructor(_firstName, _lastName){
        this._firstName = _firstName;
        this._lastName = _lastName;
    }

    fullName(){
        return (this.firstName + ' '+ this.lastName).toUpperCase();
    }
}


class student extends Persons{

    constructor (_firstName, _lastName, _grade){
        super(_firstName, _lastName);
        this._grade = _grade;
    }

    studentDetails(){
        return 'FirstName: ' + this._firstName + ' LastName: ' + this._lastName + ' Grade: ' + this._grade;
    }
}

var s = new student('firstname', 'lastname', '3rd');
console.log(s.fullName()); // Calling parent class functions
console.log(s.studentDetails());