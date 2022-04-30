var myFirstPromise = new Promise(function(resolve, reject){
    setTimeout(()=> // Use setTimeout(...) to simulate succeeded, and reject(...)
    {
        resolve("Success!"); // Everything went well.
    }, 250);
});

myFirstPromise.then(function(successMessage){
    console.log("Yay! " + successMessage);
});