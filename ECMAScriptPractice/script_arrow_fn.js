// =>

// let studentList = function(students){
//     console.log(students);
// }

let studentList = (students) => console.log(students);

studentList(["A","B","C"]);

let list =["apple","banana","cherry"];
// list.map(function (item){
//     console.log(item);
// });

list.map((item)=>console.log(item));

// let person = {
//     first: "Angie",
//     hobbies: ["bike", "hike", "ski"],
//     printHobbies: function(){
//         let _this = this;  // Resolved issue on undefined likes to...
//         this.hobbies.forEach(function (hobby){
//             let string = `${_this.first} likes to ${hobby}`;
//             console.log(string);
//         });
//     }
// };

let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function(){
        let _this = this;  // Resolved issue on undefined likes to...
        this.hobbies.forEach((hobby) => {
            let string = `${_this.first} likes to ${hobby}`;
            console.log(string);
        });
    }
};


person.printHobbies();