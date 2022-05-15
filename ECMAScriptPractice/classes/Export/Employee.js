var Human = require('./Human');

class Employee extends Human {

    constructor(name, gender, id, salary ){
        super(name, gender);
        this.id = id;
        this.salary = salary
    }

    toString(){
        return super.toString() + '\nId: ' + this.id + '\nSalary: ' + this.salary + '\n';
    }
}

module.exports = Employee;