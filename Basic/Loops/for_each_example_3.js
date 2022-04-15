let backpackContents = ["piggy", "headlamp", "pen"];

backpackContents.forEach(function(item){
    item=`<li>${item}</li>`;
    console.log(item);
});

console.log(backpackContents);