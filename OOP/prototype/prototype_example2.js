const arr = [1,2,3];
const arrProto = Object.getPrototypeOf(arr);
console.log(arr);
console.log(Object.getPrototypeOf(arrProto));

// class Alien {
//     constructor(name, phrase){
//         this.name = name;
//         this.phrase = phrase;
//         this.species = "alien";
//     }

//     fly = () => console.log("Zzzzzzzzzzzzzzzzzzzzzzzzzzziiiiiiiiiiiiiiiiiinnnnnnnnngggggggg!!");
//     sayPhrase = () => console.log(this.phrase);
// };

// const alien1 = new Alien("Ali", "I'm Ali the alien");
// console.log(alien1.name);

function Alien(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
}

Alien.prototype.fly = () => console.log("Zzzzzzzzzzzzzzzzzzzzzzzzzzziiiiiiiiiiiiiiiiiinnnnnnnnngggggggg!!");
Alien.prototype.sayPhrase = () => console.log(this.phrase);

const alien1 = new Alien("Ali", "I'm Ali the alien");
console.log(alien1.name);
console.log(alien1.phrase);
alien1.fly();