/*function islegal(age:number){
    if (age >= 18) {
        return true
    }else{
        return false
    }
}

islegal(19)*/

function runAfter15(fn: ()=> void){
    setTimeout(fn,10000)
}