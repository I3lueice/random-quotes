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

function loop(value, test, update, body) {
    while(test(value)) {
        body(value)
        value = update(value)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);


/* 3-3. everyLoop(array, test)
3-4. everySome(array, test)
Analogous to the some method, arrays also have an every method. This one returns 
true when the given function returns true for every element in the array.
 In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
Implement two versions of every (everySome and everyLoop) 
as a function that takes an array and a predicate function as parameters. Write two versions,
 one using a loop and one using the some method. */

function everyLoop(array, test) 
 {
   // Your code here.
 }
 
 function everySome(array, test) 
 {
 // Your code here.
 } 
 
 console.log(everyLoop([1, 3, 5], n => n < 10));
 // → true
 console.log(everyLoop([2, 4, 16], n => n < 10));
 // → false
 console.log(everyLoop([], n => n < 10));
 // → true