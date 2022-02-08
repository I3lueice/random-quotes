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
  let arrays = [[1,2,3], [4,5], [6]];

function flattening(inputList) {
    return inputList.reduce((aE1, aE2) => aE1.concat(aE2))
}
console.log(flattening(arrays))

/* Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, 
and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. 
Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

 (Links to an external site.)When defining the function, you can use a regular loop to do the actual looping. */

function loop(value, test, body, update) {
    while(test(value)){
        update(value)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);