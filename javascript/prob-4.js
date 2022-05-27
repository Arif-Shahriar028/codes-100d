// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const x = {
  a: 'a',
  b: 'b',
};
const y = {
  c: 'c',
  b: 'd',
  e: 'e',
};

function myFunction(x, y) {
  y.d = y.b;
  delete y.b;
  let merged = { ...x, ...y };
  return merged;
}

console.log(myFunction(x, y));
