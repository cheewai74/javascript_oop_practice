var Human = require('./Human');

class Student extends Human {

    constructor(name, gender, id, score ){
        super(name, gender);
        this.id = id;
        this.score = score;
    }

    toString(){
        return super.toString() + '\nId: ' + this.id + '\nScore: ' + this.score + '\n';
    }
}

module.exports = Student;