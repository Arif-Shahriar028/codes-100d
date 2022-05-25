// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

let a = [1, 2, 3, 4, 5, 6, 7];
let b = 2;

function myFunction(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b) {
      sum = sum + a[i];
    }
  }
  return sum;
}

console.log(myFunction(a, b));
