/**
 * 
 *  =>
 * 
 */

var intro = ()=> "welcome";
console.log(intro());

// ==================================================================================
//
//                              Arrow function With Map
//
// ==================================================================================

/**
 
    const arr = [1, 2, 3];
    const squares = arr.map(function (x){
        return x * x;
    })

 */

const arr = [1, 2, 3];
const squares = arr.map(x =>{
    return x * x;
})

console.log(squares);

// ==================================================================================

// ==================================================================================
//
//                              Arrow function With 1 parameter
//
// ==================================================================================

/**
 
    var multiplyBy2 = function multiplyBy2(value1){
        return value1 * 2;
    };
    console.log(multiplyBy2(4));

 */

var multiplyBy2 = value1 => value1 * 2;
console.log(multiplyBy2(4));

// ==================================================================================

// ==================================================================================
//
//                              Arrow function With 2 parameter
//
// ==================================================================================

/** 
 
    var add = function add(value1, value2){
        return value1 + value2;
    };
    console.log(add(10, 20))

*/

var add =(value1, value2) => value1 + value2;
console.log(add(10, 20));

// ==================================================================================

// ==================================================================================
//
//                              Returning obj literals
//
// ==================================================================================

/** 
 
        var f = function f(x){
            return {bar: 123};
        };
        console.log(f());

*/

const f = x =>({bar: 123});
console.log(f());

/** 
        function Person(){
            var _this = this;
            this.count = 0;
            setInterval(function(){
                console.log(_this.count++);
            }, 1000);
        }
        Person();
*/


// ==================================================================================

// ==================================================================================
//
//                              Arrow function (this reference)
//
// ==================================================================================

function Person() {
    this.count = 0;
    setInterval(()=>{
        console.log(this.count++);
    }, 1000);
};
Person();