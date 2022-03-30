/**
 * Unnamed Class Expression
 * 
 * <script>
 *      var emp = class{
 *          constructor(id,name){
 *              this.id = id;
 *              this.name = name;
 *          }
 *      };
 *      document.writeln(emp.name)
 * </script>
 * 
 * Output:
 * emp
 * 
 * Advantages: Allow us to re-declare the same class (Can declare class more than one time)
 * 
 */

 // Declaring class
 var emp = class {

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
var e1 = new emp(101, "Tam Tay");
var e2 = new emp(102, "John Tan");

e1.detail();
e2.detail();

// Re-declaring class 
var emp = class {

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
var e1 = new emp(103, "Kent Muthu");
var e2 = new emp(104, "Rahim");
e1.detail();
e2.detail();

// Class is retrieved using class.name property
document.writeln(emp.name);