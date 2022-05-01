var colorsMap = new Map();
colorsMap.set('redKey','red');
console.log(colorsMap.get('redKey'));
console.log(colorsMap.has('redKey'));
colorsMap.delete('redKey');
console.log(colorsMap.has('redKey'));

var map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'] 
]);
console.log(map.size);
map.clear();
console.log(map.size);

var mapp = new Map();
mapp.set(1, "One");
mapp.set(2, "Two");
mapp.set(3, "Three");
for (let [key, value] of mapp){
    console.log(`Key: ${key} Value: ${value}`);
}