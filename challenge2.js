/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log("Hello "+ name);
}

greet("shaikhah");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  let x = false;
  if(n%2!=0)
    x = true;
  return x;
      
}

if(isOdd(4)){
  console.log("the number is odd");
}else{
  console.log("the number is even");
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  let x = 0;

  if( n%2==0)//even
  {
    x = n/2;
  
  }
  else {
    x= ((n-1)/2)  ;
  }
  
  return x;
  
}
console.log(" the number of ODD numbers smaller than 15 is " + oddsSmallerThan(7));
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  let x =0;
  if( n%2==0)//even
  {
    x = n *2;
  }
  else{
    x = n**2;
  }
  return x;
}

console.log(" the value of the function is " + squareOrDouble(9));