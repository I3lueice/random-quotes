function myFunction(){
    return 1 ;
}

let myFunc = function () {
    return 1 ;
}

let myFuncArrow = a => a + 1
console.log(myFuncArrow(50))

let myFuncArrow2 = () => { return { a: 5 } }
console.log(myFuncArrow2())


function myHigherOrderFunction() {

}

console.log(myFunction())
console.log(myFunc())