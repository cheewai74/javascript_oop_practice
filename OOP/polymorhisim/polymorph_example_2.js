/**
 * 
 * 1. Child and parent class contains the same method.
 * 2. Obj of child class invokes both classes method.
 * 
 */

class A{
    display(){
        console.log("A is invoked\n");
    }
}

class B extends A{
    display(){
        console.log("B is invoked\n");
    }
}

var a = [new A(), new B()];
a.forEach(function(msg)
{
    msg.display();
}
);