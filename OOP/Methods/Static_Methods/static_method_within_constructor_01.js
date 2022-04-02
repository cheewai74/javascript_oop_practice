class Test{
    constructor(){
        console.log(Test.display() + "\n");

        // 6.   We can use this keyword to call a static method within 
        //      another static method.
        console.log(this.constructor.display());
    }

    static display(){
        return "static method is invoked";
    }
}

var t = new Test();