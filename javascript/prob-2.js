// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const a = 'abcdef';

function myFunction(a) {
  const half = Math.ceil(a.length / 2);
  const firstHalf = a.slice(0, half);
  return firstHalf;
}

console.log(myFunction(a));
