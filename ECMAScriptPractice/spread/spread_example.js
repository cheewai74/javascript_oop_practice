/**
 * 
 * function myFunction(x,y,z){
 *      console.log(x);
 *      console.log(y);
 *      console.log(z);
 * }
 * 
 * var args = [0, 1,2];
 * myFunction(args);
 * 
 */

function myFunction(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);
}

var args = [0, 1, 2];
myFunction(...args);
  