const PI = 3.14;
function fun(){
    const PI = 3.141;
    if(true){
        const PI = 3.14159;
        console.log(PI);
    }
    console.log(PI);
}

console.log(PI);
fun();