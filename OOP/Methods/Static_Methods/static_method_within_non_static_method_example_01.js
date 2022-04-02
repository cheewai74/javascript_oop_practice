class Test{

    static display(){
        return "static method is invoked";
    }

    show(){
        console.log(Test.display() +"\n");
        //document.writeln(Test.display() + "<br/>");
    }
}

var t = new Test()
t.show();