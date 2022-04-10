/* *
* THE SUM OF A RANGE
// TODO: Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
*/

function range (start, end) {
    let arr = [];
    for (let i = start; arr.length < end; i++) {
        arr.push(i);
    }
    return arr;
}

/* *
// TODO: Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
*/

function sum (arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

/* *
TODO: As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/* *
* REVERSING AN ARRAY
write two functions, reverseArray and reverseArrayInPlace. 
TODO: The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
*/

/* *
TODO: The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/


// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
