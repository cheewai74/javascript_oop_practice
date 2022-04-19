// const delay = (seconds) => new Promise((resolve) => 
//                                 setTimeout(resolve, seconds * 1000 ));

const delay = (seconds) => new Promise((resolve, reject) => {

    if(typeof seconds !== "number"){
        reject(
            new Error("Seconds must be a number"));
    }
    setTimeout(resolve, seconds * 1000 ); 
});
                                                             
console.log("Zero Seconds");
delay(1).then(()=>console.log("One second"));

delay(10).then(()=>console.log("10 secs"));

// delay("one").then(()=>console.log("1 secs")); // Will show error as expected