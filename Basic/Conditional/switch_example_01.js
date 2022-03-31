/**
 * switch(expression){
 * case value1:
 *      // Code to be executed.
 * break;
 * case value2:
 *      // Code to be executed.
 * break;
 * ....
 * default:
 *      // Code to be executed if above values are not matched;
 * }
 * 
 */

var grade ='B';
var result;

switch (grade) {
    case 'A':
        result = "A Grade";
        break;

    case 'B':
        result = "B Grade";
        break;

    case 'C':
        result = "C Grade";
        break;

    default:
        result = "No Grade";
        break;
}

document.write(result);