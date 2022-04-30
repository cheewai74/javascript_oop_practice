const user ={
    id: 101010,
    name: "sammi",
    email: "sammi@gmail.com",
};

// The replacer argument can be used to filter out values if you return undefined
function replacer(key, value){

    if(typeof value === "number"){
        return undefined;
    }

    if(key === "email"){
        return  "Removed for privacy";
    }

    return value;
}

console.log(JSON.stringify(user));

console.log(JSON.stringify(user, replacer));

console.log(JSON.stringify(user, null, "^_^ "));

const mySampleObject = {
    string: 'a string',
    number: 37,
    boolean: true,
    nullValue: null,
    notANumber: NaN, // NaN values will be lost (the value will be forced to 'null')
    dateObject: new Date('2019-12-31T23:59:59'),  // Date will get stringified
    undefinedValue: undefined,  // Undefined values will be completely lost, including the key containing the undefined value
    infinityValue: Infinity,  // Infinity will be lost (the value will be forced to 'null')
    regExpObject: /.*/, // RegExp will be lost (the value will be forced to an empty object {})
  };

  console.log(mySampleObject);
  console.log(typeof(mySampleObject));

  const faultyDeepClone =JSON.parse(JSON.stringify(mySampleObject));
  console.log(faultyDeepClone);

  console.log(typeof faultyDeepClone.dateObject)
