/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
// eslint-disable-next-line arrow-parens
const secondArgumentIsntZero = func =>
  (...args) => {
    if (args[1] === 0) {
      console.log('Error: dividing by zero');
      return null;
    }
    return func(...args);
  };

const divide = (x, y) => x / y;

const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(7, 0));
console.log(divideSafe(5, 3));
