// A closure is a concept where a function 
// (with it's own local scope) has access to 
// it's outer scope(like its parent scope)

function outerTotal(number1){
    return function innerTotal(number2){    
        const total = number1 + number2
        console.log(total)
    }
}

const findTotal = outerTotal(50)
findTotal(100)

// Closure Example 2:
// Closure, is a scenario where a function has 
// access to the variables in it's outer scope (the parent function)
// such that even though the parent function executed,
// the inner function has already saved the value of 
// the variables during its definition.

function printSomething() {
    const something = "Hello"
    console.log(something)

    setTimeout(function() {
        console.log(`Printing  ${something} again`)
    }, 2000)
}

printSomething()

