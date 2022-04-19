const daytime = {
    breakfast: "oatmeal",
    lunch: "penut butter and jelly"
};

const nighttime = "mac and cheese";

const backpacingMeals = {
    
    // daytime,
    ...daytime,   // Using Spread Operators.
    nighttime
};

console.log(backpacingMeals);