const names = ['Name 1', 'Name 2', 'name 3', 'Name 4'];

console.log('Name List');
for(const index in names){
    console.log(index + ': '+ names[index]);
}

console.log('Name List');
for(const name of names){
    console.log(name);
}