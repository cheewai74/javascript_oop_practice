const my_object ={
    dog: "🐕",
    cat: "🐈", 
    koala: "🐨",
    count: 3
};

console.log(JSON.stringify(my_object));

console.log(JSON.parse(JSON.stringify(my_object)))