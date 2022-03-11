// Invoking functiobs as methods
// 1. The this argument points to the object
// 2. Invoke the function using dot notation
// 3. The binding of this happens at invocation time.

var calc = {
    status: 'Awesome',
    plus: function (a,b){
        return (
            console.log(this),
            console.log(a+b),
            console.log(arguments),
            console.log(this.status)

        )
    }
}

calc.plus(2,2);