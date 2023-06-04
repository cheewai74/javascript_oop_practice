/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
const createPrinter = () => {
  const myFavouriteNumber = 42;
  return () => console.log(`My favourite number is ${myFavouriteNumber}`);
};

const printer = createPrinter();
printer();

// npx babel-node Functional_Programming\functional-es6\closure_example.js