// Note:
//
// 1. Object literals are great for representing unique structures 
//    but when we need to repeat that structure Classes are better.
// 2. Object store in variable.
//
// ========================  Javascript Object ==================================
// Objects Literal
const cookie = {}; // object literal
console.log(cookie);

const biscuits ={
    name: "Chocolate Chip",  // properties
    isGlutenFree: false,
    "+Yummy": true,
    eatBiscuit: function(){
        console.log("I am eating " + this.name);
    }

};
console.log(biscuits);
console.log(biscuits.name);

biscuits.name = "Strawberry Flavour";
biscuits.isGlutenFree = true;
biscuits.eatBiscuit();

console.log(biscuits.name);
console.log(biscuits);

// The square brackets allow you to access properties 
//  via dynamic names or names with special characters
console.log(biscuits["+Yummy"]); // Access properties from an obj via []

// ========================  Javascript Class ====================================

class Cookie{};
const myCookie = new Cookie();
console.log(myCookie);

class Biscuit{

    constructor(name, isGlutenFree){
        this.name= name;
        this.isGlutenFree = isGlutenFree;
    }

    // Create a method, which is a function to a class
    // Note: Inside a class, you don't need the function keyword.
    eatBiscuit() {
        console.log("I am eating " + this.name);
    }

};
const mybiscuit = new Biscuit("Iced Oatmeal", false);
//  Biscuit {name: 'Iced Oatmeal', isGlutenFree: false}
//  Tells you which class created it as compared to literal object doesn't
console.log(mybiscuit);

console.log(mybiscuit.name);
console.log(mybiscuit["name"]);
console.log(mybiscuit.isGlutenFree);
mybiscuit.eatBiscuit();



