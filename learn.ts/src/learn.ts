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

enum Direction{
    Up=9999999,
    Down,
    Left,
    Right
}
function doSomething(keyPressed:Direction){
    if(keyPressed == Direction.Up){

    }
}

doSomething(Direction.Right);

console.log(Direction.Up);