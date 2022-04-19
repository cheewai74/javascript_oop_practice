// const sandwich = {
//     title: "Reuben",
//     price: 7,
//     description: "A classic",
//     ingredients: [
//         "bread",
//         "corned beef",
//         "dressing",
//         "sauerkrauf",
//         "cheese"
//     ]
// };

// console.log(sandwich.title);
// console.log(sandwich.price);

const vacation = {
    destination: "Chile",
    travelers: 2,
    activity:"skiing",
    cost:"so much"
};

function marketing({destination, activity}){
    return `Come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacation))

const {title, price} = {
    title: "Reuben",
    price: 7,
    description: "A classic",
    ingredients: [
        "bread",
        "corned beef",
        "dressing",
        "sauerkrauf",
        "cheese"
    ]
};

console.log(title);
console.log(price);
