"use strict";
/*function islegal(age:number){
    if (age >= 18) {
        return true
    }else{
        return false
    }
}

islegal(19)

function runAfter15(fn: ()=> void){
    setTimeout(fn,10000)
}

interface User{
    firstName:string,
    lastName:string,
    age: number,
}
function isLegal(user:User){
    if(user.age >18){
        return true;
    }else{
        return false;
    }
}

isLegal({
    firstName:"Nithin",
    lastName:"Krishna",
    age:21,
})
*/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 9999999] = "Up";
    Direction[Direction["Down"] = 10000000] = "Down";
    Direction[Direction["Left"] = 10000001] = "Left";
    Direction[Direction["Right"] = 10000002] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.Up) {
    }
}
doSomething(Direction.Right);
console.log(Direction.Up);
