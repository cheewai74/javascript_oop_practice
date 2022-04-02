/**
 * The javascript provides static methods that belong to the class instead of 
 * an instance of that class. Instance is not required to call the static method.
 * 
 * 1.   The static keyword is used to declare a static method.
 * 
 * 2.   The static method can be of any name.
 * 
 * 3.   A class can contain more than 1 static method.
 * 
 * 4.   If we declare more than 1 static method with a similar name,
 *      the javascript always invoke the last one.
 * 
 * 5.   The static method can be used to create utility function
 * 
 * 6.   We can use this keyword to call a static method within 
 *      another static method.
 * 
 * 7.   We cannot use this keyword directly to call a static 
 *      method within the non-static method. In such case, we
 *      can call the static method either using the class name 
 *      or as the property of the constructor.
 * 
 */

class Test{

    // 1.   The static keyword is used to declare a static method.
    // 2.   The static method can be of any name.
    static display(){
        return "static method is invoked"
    }

    // ====  3.   A class can contain more than 1 static method.====

    static display1(){
        return "static method is invoked"
    }

    static display2(){
        return "static method is invoked again"
    }


    // 4.   If we declare more than 1 static method with a similar name,
    //      the javascript always invoke the last one
    static display(){
        return "static method is invoked again"
    }


    // ==============================================================
}

// console.log(Test.display());

console.log(Test.display1());
//document.writeln(Test.display1() + "<br/>");
console.log(Test.display2());
//document.writeln(Test.display2() + "<br/>");

// 4.   If we declare more than 1 static method with a similar name,
//      the javascript always invoke the last one
console.log(Test.display());
//document.writeln(Test.display() + "<br/>");