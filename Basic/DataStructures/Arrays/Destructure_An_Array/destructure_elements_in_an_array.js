const animals = ['Dog', 'Cat', 'Horse'];
const [dog, cat, horse] = animals;

dogVar = animals[0];
const catVar = animals[1];
const horseVar = animals[2];

console.log(dogVar);
console.log(catVar);
console.log(horseVar);

console.log(dog);
console.log(cat);
console.log(horse);

const fruits = ['banana','apple','orange'];
const[,apple] = fruits;
const[,,orange] = fruits;
console.log(apple);
console.log(orange);