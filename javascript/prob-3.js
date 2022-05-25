// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const obj = {
  name: {
    firstName: 'Arif',
    lastName: 'Shahriar',
  },
  age: 22,
  address: 'brahmanbaria',
};

const prop = 'name';

function myFunction(a, b) {
  if (a.hasOwnProperty(b)) {
    return 'true';
  }
  //simply we can return (b in a)
  return 'false';
}

console.log(myFunction(obj, prop)); // valid
console.log(obj.name.hasOwnProperty('firstName')); // valid
