// console.log("Hello")

/**
 * a closure gives you access to an outer function's scope from an inner function. 
 * In JavaScript, closures are created every time a function is created, 
 * at function creation time.
 */
var warrior = 'Ninja';

let warrior_3 = 'Ninja Turtle';
const warrior_4 = 'Shredder';
console.log(warrior_3, warrior_4);

const screamWarrior = () =>{
    let warrior2 = 'Samurai';
    // console.log(warrior, warrior2)
    return {
        shootWarror: () =>{
            return console.log(warrior, warrior2);
        }
    }
}

const screamWarrior_2 = () =>{
    var warrior_1 = 'Ninja';
    var warrior_2 = 'Samurai';
    return `Our warriors are ${warrior_1} and ${warrior_2}`;

}

// screamWarrior();
// console.log(warrior, warrior2)

const newWarrior = screamWarrior()
newWarrior.shootWarror();

//  Local Variables
console.log(screamWarrior_2());