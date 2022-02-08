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

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  
  repeat(3, console.log);


  // Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
  let arrays = [[1,2,3], [4,5], [6]]
function flattening(inputList) {

}