/**
 * 
 *  To achieve encapsulation:
 *  1.  Use var keyword to make data members private
 *  2.  Use setter methods to set the data and getter methods to get that data.
 * 
 */

class Student{

    constructor(){
        var name;
        var marks;
    }

    getName(){
       return this.name; 
    }

    setName(name){
        this.name = name;
    }

    getMarks(){
        return this.marks;
    }

    setMarks(marks){
        // this.marks = marks;
        if(marks<0 || marks>100){
            // alert("Invalid Marks");
            console.log("Invalid Marks");
        }
        else{
            this.marks = marks;
        }
    }

}

var stud = new Student();
// stud.setName("John");
// stud.setMarks(90);
stud.setName("Mary");
stud.setMarks(190);
console.log(stud.getName() + " " + stud.getMarks() +"\n");
// document.writeln(stud.getName() + " " + stud.getMarks() + "<br\>")