function makePerson(name){
    let _name = name;

    return {
        setName: (newName) => (_name = newName),
        getName: () => _name,
    };
}

const me = makePerson("Kent");
console.log(me.getName());

me.setName("Tim");
console.log(me.getName());