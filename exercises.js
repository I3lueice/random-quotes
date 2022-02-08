function myFunction(){
    return 1 ;
}

let myFunc = function () {
    return 1 ;
}

let myFuncArrow = a => a + 1
console.log(myFuncArrow(50))

let myFuncArrow2 = () => { return { a: 5 }}
console.log(myFuncArrow2())



function myHigherOrderFunction(paramenterFunction) {
    return paramenterFunction()
}

console.log(myHigherOrderFunction(() => { return { a: 5 }} ))

