function skier(name, sound){
    return{
        // With object literal, we don't need to include the colon and name again.
        // name: name,
        // sound: sound,
        name, 
        sound,
        powderYell: function(){
        let yell = this.sound.toUpperCase();
        console.log(`${yell}! ${yell}!`);
        }
    };
}

skier("Sandy","Yahoo").powderYell();
skier("Tim","Yeah").powderYell();