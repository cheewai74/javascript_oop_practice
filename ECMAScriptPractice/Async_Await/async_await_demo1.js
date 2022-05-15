async function process(){

    let promise = new Promise((resolve, reject)=>{
        setTimeout(() => resolve("Done!"),1000)
    });

    let result = await promise;
    console.log(result);
}

process();


function calculateAfter25Sec(param){
    return new Promise((resolve, reject)=>{
        setTimeout(function (){resolve(param * 2)}, 2000);
    });
}

async function sum(a,b){
    a = await calculateAfter25Sec(a);
    b = await calculateAfter25Sec(b);
    return a + b;
}

sum(1,2).then(console.log)