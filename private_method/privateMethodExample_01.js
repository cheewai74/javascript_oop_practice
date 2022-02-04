function makeCharacter(name){
    let _name = name;

    function privateSetName(newName){
        _name = newName;
    }

    return {
        setName: (newName) => privateSetName(newName),
        getName: () => _name,
    };

}

const me = makeCharacter("Kent");
console.log(me.getName());