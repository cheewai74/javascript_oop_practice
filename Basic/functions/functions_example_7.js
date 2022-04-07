// function f1(){
//     //  Some code
// }

// function f2(){
//     //   Some code
// }

// function f3(){
//     //   Some code
// }

// //  Invoke the functions
// f1();
// f2();
// f3();


/**
 * 
 * How synchronous works:
 * 
 * First, f1() finishes executing and comes out of the stack. 
 * Right after that f2() finishes, and finally f3().
 * 
 * The bottom line is that everything that happens inside the function 
 * execution stack is sequential. This is the Synchronous part of JavaScript. 
 * 
 * JavaScript's main thread makes sure that it takes care 
 * of everything in the stack before it starts 
 * looking into anything elsewhere.
 * 
 */

// function f1(){
//     //  Some code
// }

// function f2(){
//     f1();
// }

// function f3(){
//     f2();
// }

// //  Invoke the functions
// f3();

function f1(){
    console.log('f1');
}

function f2(){
    console.log('f2');
}

function main(){
    console.log('main');
    setTimeout(f1, 0);

    f2();
}

// Invoke the main
main();
