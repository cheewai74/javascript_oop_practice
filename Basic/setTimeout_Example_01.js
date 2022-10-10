function printHello(){
    console.log("Hello")
}

// setTimeout(printHello, 3000)

// const timeoutId = setTimeout(printHello, 1000)
// clearTimeout(timeoutId)

// -- setInterval(fn, time) --
// setInterval(printHello, 1000)

const interValid = setInterval(printHello, 1000)
setTimeout(function() {
    clearInterval(interValid)
}, 2000)