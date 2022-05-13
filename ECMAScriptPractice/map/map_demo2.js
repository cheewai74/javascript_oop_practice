var student = new Map();
student.set('id', 'st02');
student.set('name', 'Timmy Tay');
student.set('age', 40);

console.log('Student Info');
student.forEach((value, key) =>{
    console.log(key + ': ' + value);
})

let product= new Map([ 
    ['id', 'p01'],
    ['name', 'Steve Hang'],
    ['price', 200]
]);

console.log('Product Info');
product.forEach((value, key)=>{
    console.log(key + ': ' + value);
})