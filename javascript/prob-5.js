// Write a function that takes two strings (a and b) as arguments
// Insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b) {
  const len = a.length;
  let startPoint = 0,
    c = '',
    i;

  for (i = 0; i < len; i++) {
    if ((i + 1) % 3 == 0) {
      c = c + [a.slice(startPoint, i + 1), b].join('');
      startPoint = i + 1;
    }
  }
  c = c + [a.slice(startPoint, i + 1), ''].join('');
  return c;
}

console.log(myFunction('123456789', '.'));
